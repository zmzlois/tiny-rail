"use server"


import { client1, client2 } from "./client"
import type { QueryTemplatesConnection, QueryTemplatesConnectionEdge } from "@/lib/api"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { db, projects } from "@/db"
import { eq } from "drizzle-orm"

export default async function getTemplatesFromRailway() {
    const gql = await client1()

    const result = await gql.query({
        templates: {
            __args: {
                recommended: true,
            },
            __scalar: true,
            edges: {
                node: {
                    __scalar: true,

                }
            },
        }
    })

    return result;

}

export async function getProjectByWorkspace() {
    const workspace = await getDefaultWorkspaceByUserId()

    return db.select().from(projects).where(eq(projects.workspaceId, workspace.id))
}