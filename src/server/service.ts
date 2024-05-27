"use server"

import { client1 } from "./client"
import { CustomError } from "@/lib/error"
import { createNewProject, findProjectInDb, getProjectByIdFromRailway } from "./projects"
import { db, projects } from "@/db"
import { generate } from "@/lib/generate-name"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { environments, services } from "@/db/schema/project"
import { z } from "zod"
import { eq } from "drizzle-orm"
import { selectProjectSchema } from "@/db/schema/project"
import { variables, DatabaseSource } from "@/lib/constants"
import { getProjectEnvironment } from "./environment"



type Source = {
    type: "repo"
    branch: string
    name: string
    source?: string

} | {
    type: "image"
    source?: string
    name: DatabaseSource
}

export async function createOrUpdateServiceInDb(input: { externalId: string, projectId: string, name: string, url: string | null }) {

    if (!input.externalId) throw new CustomError("input.externalId not found")
    if (!input.projectId) throw new CustomError("input.projectId not found")
    const findService = await db.select().from(services).where(eq(services.externalId, input.externalId)).then((res) => res[0])

    const environment = await getProjectEnvironment({ projectId: input.projectId }).then((res) => res)

    if (!findService) {
        return db.insert(services).values({
            externalId: input.externalId,
            projectId: input.projectId,
            environmentId: environment.id,
            name: input.name,
            url: input.url ?? ""
        }).returning().then((res) => res)

    }

    return db.update(services).set({
        externalId: input.externalId,
        projectId: input.projectId,
        environmentId: environment.id,
        name: input.name,
        url: input.url ?? ""
    }).where(eq(services.externalId, input.externalId)).returning().then((res) => res)
}

// edge {
//   id: 'd376267d-40d2-4c02-973c-44a7b4455a03',
//   createdAt: '2024-05-17T16:51:43.265Z',
//   deletedAt: null,
//   isEphemeral: false,
//   name: 'production',
//   projectId: '235862b6-8643-4a7e-ba80-8c19f4247efa',
//   unmergedChangesCount: null,
//   updatedAt: '2024-05-17T16:51:43.265Z',
//   __typename: 'Environment'
// }

export async function createService(input: { source: Source, projectId: string | null }) {

    const gql = await client1();

    console.log("[createService]:", input)

    let newProject: z.infer<typeof selectProjectSchema> | undefined;

    if (!input.projectId) {
        newProject = await createNewProject();
        input.projectId = newProject.id;
    }


    let externalId = await findProjectInDb({ projectId: input.projectId ?? newProject!.id }).then((res) => res.externalId);

    if (!externalId) externalId = process.env.RAILWAY_PROJECT_ID!;

    if (!input.source.source) throw new CustomError("input.source.source not found");


    const environment = await getProjectEnvironment({ projectId: input.projectId })





    if (input.source.type === "image") {



        const newService = await gql.mutation({
            serviceCreate: {
                __args: {
                    input: {
                        branch: "main",
                        environmentId: environment.externalId,
                        projectId: externalId,
                        name: input.source.name,
                        source: {
                            image: input.source.source,
                            // repo: input.source.source
                        },
                        variables: variables({ source: input.source.name })
                    },

                },
                __scalar: true,
                deployments: {
                    edges: {
                        node: {
                            staticUrl: true,
                            __scalar: true
                        }
                    }
                }
            }
        })

        const url = newService.serviceCreate.deployments.edges.map((res) => res.node.staticUrl)[0]

        return createOrUpdateServiceInDb({
            externalId: newService.serviceCreate.id,
            projectId: input.projectId,
            name: input.source.name,
            url: url ?? ""
        })



    } else if (input.source.type === "repo") {

        console.log("input.source.source", input.source.source)
        const newService = await gql.mutation({
            serviceCreate: {
                __args: {
                    input: {
                        projectId: externalId,
                        branch: input.source.branch,
                        name: input.source.name,
                        source: {
                            repo: input.source.source
                        }
                    },

                },
                __scalar: true,
                deployments: {
                    edges: {
                        node: {
                            staticUrl: true,
                            __scalar: true
                        }
                    }
                }
            }

        })
        const url = newService.serviceCreate.deployments.edges.map((res) => res.node.staticUrl)[0]

        return createOrUpdateServiceInDb({
            externalId: newService.serviceCreate.id,
            projectId: input.projectId,
            name: input.source.name,
            url: url ?? ""
        })
    }

}
export async function destroyService(input: { serviceId?: string, projectId: string, environmentId?: string }) {

    const gql = await client1();
    if (!input.serviceId) throw new CustomError("input.serviceId not found")
    console.log("input", input)

    const serviceId = await db.select().from(services).where(eq(services.id, input.serviceId)).then((res) => res[0].externalId)

    if (!serviceId) throw new CustomError("serviceId not found")

    const environmentId = await db.select().from(environments).where(eq(environments.projectId, input.projectId)).then((res) => res[0].externalId)

    const deleteService = await db.delete(services).where(eq(services.id, input.serviceId)).returning()

    console.table({ serviceId, environmentId })
    try {
        return gql.mutation({
            serviceDelete: {
                __args: {
                    id: serviceId,
                    environmentId: environmentId,
                },

            }
        })


    } catch (error) {
        console.error("[destroyService]:", error)
        throw new CustomError("Failed to destroy service")
    }

}

export async function redeployService(input: { serviceId?: string, environmentId?: string }) {

    const gql = await client1();
    if (!input.serviceId) throw new CustomError("input.serviceId not found")
    if (!input.environmentId) throw new CustomError("input.environmentId not found")


    return gql.mutation({
        serviceInstanceRedeploy: {
            __args: {
                serviceId: input.serviceId,
                environmentId: input.environmentId
            },

        }
    })

}