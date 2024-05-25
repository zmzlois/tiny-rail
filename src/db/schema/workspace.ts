import { base } from "./base";
import {
    timestamp,
    pgTable,
    varchar,
    primaryKey,
    integer,

    pgEnum

} from "drizzle-orm/pg-core"
import { users } from "./user";



export const workspaces = pgTable("workspace", {
    name: varchar("name"),
    description: varchar("description"),
    image: varchar("image"),
    creatorId: varchar("owner_id").notNull(),
    ...base
})

export const roleEnum = pgEnum("role", ["owner", "admin", "member"])
export const workspaceMembers = pgTable("workspace_members", {
    workspaceId: varchar("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    role: roleEnum("role").notNull(),
    ...base // Add the missing property '_' with the value 'base'
})