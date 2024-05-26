"use server"

import { db } from "@/db"
import { environments, projects } from "@/db/schema/project"
import { eq } from "drizzle-orm"
import { client1 } from "./client"


export async function getProjectEnvironment(input: { projectId: string }) {
    const findEnv = await db.select().from(environments).where(eq(environments.projectId, input.projectId)).then((res) => res[0])

    if (!findEnv) {

        let externalProjectId = await db.select().from(projects).where(eq(projects.id, input.projectId)).then((res) => res[0].externalId)

        if (!externalProjectId) externalProjectId = process.env.RAILWAY_PROJECT_ID!

        const railwayEnvId = (await client1()).query({
            project: {
                __args: {
                    id: externalProjectId,
                },
                environments: {
                    edges: {
                        node: {
                            id: true,
                            __scalar: true
                        }
                    }
                }
            }
        }).then((res) => res.project.environments.edges[0].node.id)

        const envId = await railwayEnvId.then((res) => res)
        return db.insert(environments).values({
            projectId: input.projectId,
            externalId: envId,
        }).returning().then((res) => res[0])
    }

    return findEnv
}