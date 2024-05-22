"use server"

import { db, workspaces } from "@/db"
import { eq, and } from "drizzle-orm"
import { fetchUser } from "./user"

export async function getDefaultWorkspaceByUserId() {

    const user = await fetchUser()
    return db.select().from(workspaces).where(and(eq(workspaces.creatorId, user!.id), eq(workspaces.name, user!.username!))).then((rows) => rows[0])
}