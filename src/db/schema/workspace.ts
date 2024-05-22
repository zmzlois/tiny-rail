import { base } from "./base";
import {
    timestamp,
    pgTable,
    varchar,
    primaryKey,
    integer,

    pgEnum

} from "drizzle-orm/pg-core"



export const workspaces = pgTable("workspace", {
    name: varchar("name"),
    description: varchar("description"),
    image: varchar("image"),
    creatorId: varchar("ownerId").notNull(),
    ...base
})

export const roleEnum = pgEnum("role", ["owner", "admin", "member"])
export const workspaceMembers = pgTable("workspace_members", {
    workspaceId: varchar("workspaceId").notNull(),
    userId: varchar("userId").notNull(),
    role: roleEnum("role").notNull(),
    ...base // Add the missing property '_' with the value 'base'
})