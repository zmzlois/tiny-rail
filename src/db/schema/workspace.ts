import { base } from "./base";
import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    pgEnum

} from "drizzle-orm/pg-core"



export const workspaces = pgTable("workspace", {
    name: text("name"),
    description: text("description"),
    image: text("image"),
    creatorId: text("ownerId").notNull(),
    ...base
})

const roleEnum = pgEnum("role", ["owner", "admin", "member"])
export const workspaceMembers = pgTable("workspace_members", {
    workspaceId: text("workspaceId").notNull(),
    userId: text("userId").notNull(),
    role: roleEnum("role").notNull(),
    ...base
})