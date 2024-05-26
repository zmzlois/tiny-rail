"use server"

import { client1 } from "./client"
import { CustomError } from "@/lib/error"
import { createNewProject, findProjectInDb, getProjectByIdFromRailway } from "./projects"
import { db, projects } from "@/db"
import { generate } from "@/lib/generate-name"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { environments, services } from "@/db/schema/project"
import { create } from "domain"
import { z } from "zod"
import { eq } from "drizzle-orm"
import { selectProjectSchema } from "@/db/schema/project"



type Source = {
    type: "repo"
    branch: string
    name: string
    source?: string

} | {
    type: "image"
    source?: string
    name: string
}

export async function createServiceInDb(input: { externalId: string, projectId: string, name: string }) {

    if (!input.externalId) throw new CustomError("input.externalId not found")
    if (!input.projectId) throw new CustomError("input.projectId not found")
    if (!input.name) throw new CustomError("input.name not found")

    const environment = await db.select().from(environments).where(eq(environments.projectId, input.projectId)).then((res) => res[0])


    return db.insert(services).values({
        externalId: input.externalId,
        environmentId: environment.id,
        projectId: input.projectId,
        name: input.name,
    }).returning().then((res) => res[0])
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


    let variables = {}
    let newProject: z.infer<typeof selectProjectSchema> | undefined;

    if (!input.projectId) {
        newProject = await createNewProject();
        input.projectId = newProject.id;
    }


    let externalId = await findProjectInDb({ projectId: input.projectId ?? newProject!.id }).then((res) => res.externalId);

    if (!externalId) externalId = process.env.RAILWAY_PROJECT_ID!;

    if (!input.source.source) throw new CustomError("input.source.source not found");



    if (input.source.type === "image") {

        if (input.source.source === "mysql") {
            variables = {
                "MYSQLDATABASE": "${{MYSQL_DATABASE}}",
                "MYSQLHOST": "${{RAILWAY_TCP_PROXY_DOMAIN}}",
                "MYSQLPASSWORD": "${{MYSQL_ROOT_PASSWORD}}",
                "MYSQLPORT": "${{RAILWAY_TCP_PROXY_PORT}}",
                "MYSQLUSER": "root",
                "MYSQL_DATABASE": "railway",
                "MYSQL_PRIVATE_URL": "mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:3306/${{MYSQL_DATABASE}}",
                "MYSQL_ROOT_PASSWORD": "raWJgYxAmOjrwSEXUnukZNuSoqxdaIRS",
                "MYSQL_URL": "mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}/${{MYSQL_DATABASE}}"
            }
            const newService = await gql.mutation({
                serviceCreate: {
                    __args: {
                        input: {
                            branch: "main",
                            environmentId: process.env.RAILWAY_ENVIRONMENT_ID,
                            projectId: externalId,
                            name: input.source.name,
                            source: {
                                image: input.source.source,
                                // repo: input.source.source
                            },
                            variables: variables
                        },

                    },
                    __scalar: true
                }
            })

            return createServiceInDb({
                externalId: newService.serviceCreate.id,
                projectId: input.projectId,
                name: input.source.name
            })
        }


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
                __scalar: true
            }

        })

        const findEnvironment = await db.select().from(environments).where(eq(environments.projectId, input.projectId)).then((res) => res[0])
        return createServiceInDb({
            externalId: newService.serviceCreate.id,
            projectId: input.projectId,
            name: input.source.name
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