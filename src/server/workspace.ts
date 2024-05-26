"use server"

import { db, workspaces } from "@/db"
import { eq, and } from "drizzle-orm"
import { fetchUser } from "./user"
import { client1 } from "./client"

export async function getDefaultWorkspaceByUserId() {

    const user = await fetchUser()

    // every user on default has a workspace with their username as personal workspace
    const workspace = await db.select().from(workspaces).where(and(eq(workspaces.creatorId, user!.id), eq(workspaces.name, user!.username!))).then((rows) => rows[0])


    if (!workspace) throw new Error("workspace not found")
    return workspace;
}