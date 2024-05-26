"use server"

import { client1 } from "./client"
import { CustomError } from "@/lib/error"
import { createNewProject } from "./projects"
import { db, projects } from "@/db"
import { generate } from "@/lib/generate-name"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { services } from "@/db/schema/project"
import { create } from "domain"



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
    return db.insert(services).values({
        externalId: input.externalId,
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

export async function createService(input: { source: Source }) {

    const gql = await client1();

    // const environments = await gql.query({
    //     project: {
    //         __args: {
    //             id: process.env.RAILWAY_PROJECT_ID!
    //         },
    //         environments: {
    //             edges: {
    //                 node: {
    //                     id: true,
    //                     __scalar: true
    //                 }
    //             }
    //         }
    //     }
    // }).then((res) => res.project.environments.edges.map((edge) => console.log("edge", edge.node)))

    let variables = {}
    const newProject = await createNewProject()

    if (!input.source.source) throw new CustomError("input.source.source not found")

    if (!newProject.externalId) throw new CustomError("newProject.id not found")

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
                            projectId: newProject.externalId,
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
                projectId: newProject.id,
                name: input.source.name
            })
        }


    } else if (input.source.type === "repo") {

        const newService = await gql.mutation({
            serviceCreate: {
                __args: {
                    input: {
                        projectId: newProject.externalId,
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
        return createServiceInDb({
            externalId: newService.serviceCreate.id,
            projectId: newProject.id,
            name: input.source.name
        })
    }

}
export async function destroyService(input: { serviceId?: string, environmentId?: string }) {

    const gql = await client1();
    if (!input.serviceId) throw new CustomError("input.serviceId not found")

    return gql.mutation({
        serviceDelete: {
            __args: {
                id: input.serviceId,

                environmentId: input.environmentId
            },

        }
    })

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