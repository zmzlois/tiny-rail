import { use } from "react";
import { base, externalBase } from "./base";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import {
    timestamp,
    pgTable,
    varchar,
    primaryKey,
    integer,
} from "drizzle-orm/pg-core"
import { roleEnum, workspaces } from "./workspace";
import { users } from "./user";

export const projects = pgTable("projects", {
    externalId: varchar("external_id"),
    name: varchar("name").notNull().unique(),
    description: varchar("description"),
    image: varchar("image"),
    workspaceId: varchar("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" }),
    ...base
})
export const createProjectSchema = createInsertSchema(projects)
export const selectProjectSchema = createSelectSchema(projects)

export const services = pgTable("project_services", {
    externalId: varchar("external_id").unique(),
    name: varchar("name").notNull(),
    environmentId: varchar("environment_id").notNull().references(() => environments.id, { onDelete: "cascade" }),
    description: varchar("description"),
    image: varchar("image"),
    url: varchar("url"),
    projectId: varchar("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
    ...base
})

export const selectServiceSchema = createSelectSchema(services)

export const environments = pgTable("project_environments", {
    name: varchar("name"),
    projectId: varchar("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
    ...externalBase,
})

export const deployments = pgTable("service_deployments", {
    externalId: varchar("external_id").unique(),
    serviceId: varchar("service_id").notNull().references(() => services.id, { onDelete: "cascade" }),
    environmentlId: varchar("environment_id").notNull().references(() => environments.id, { onDelete: "cascade" }),
    ...base
}
)



export const projectTeams = pgTable("project_teams", {
    name: varchar("name"),
    description: varchar("description"),
    image: varchar("image"),
    projectId: varchar("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
    ...base
})

export const teamMembers = pgTable("project_team_members", {
    teamId: varchar("team_id").notNull().references(() => projectTeams.id, { onDelete: "cascade" }),
    userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    role: roleEnum("role").notNull(),
    ...base
})