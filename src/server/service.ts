"use server"

import { client1 } from "./client"
import { CustomError } from "@/lib/error"
import { createNewProject } from "./projects"
import { db, projects } from "@/db"
import { generate } from "@/lib/generate-name"
import { getDefaultWorkspaceByUserId } from "./workspace"

type Source = {
    type: "image" | "repo"
    source?: string
}

export async function createService(input: { source: Source }) {

    const gql = await client1();
    const projectName = generate()
    const externalId = process.env.RAILWAY_PROJECT_ID!


    const workspace = await getDefaultWorkspaceByUserId()

    const createProject = await db.insert(projects).values({
        name: projectName,
        workspaceId: workspace.id,
        externalId: externalId
    }).returning()

    if (input.source.type === "image") {
        const createService = await gql.mutation({
            serviceCreate: {
                __args: {
                    input: {
                        projectId: externalId,
                    },
                    source: {
                        image: input.source.source
                    }
                },
                __scalar: true
            }
        })
    }

    const createService = await gql.mutation({
        serviceCreate: {
            __args: {
                input: {
                    projectId: externalId,
                },
                source: {
                    repo: input.source.source
                }
            },
            __scalar: true
        }
    })


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

    console.log("service id", input.serviceId);
    console.log("environment id", input.environmentId);

    return gql.mutation({
        serviceInstanceRedeploy: {
            __args: {
                serviceId: input.serviceId,
                environmentId: input.environmentId
            },

        }
    })

}