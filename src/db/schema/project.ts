import { use } from "react";
import { base } from "./base";
import {
    timestamp,
    pgTable,
    varchar,
    primaryKey,
    integer,
} from "drizzle-orm/pg-core"
import { roleEnum } from "./workspace";

export const projects = pgTable("projects", {
    name: varchar("name"),
    description: varchar("description"),
    image: varchar("image"),
    workspaceId: varchar("workspaceId").notNull(),
    ...base
})

export const services = pgTable("project_services", {
    name: varchar("name"),
    description: varchar("description"),
    image: varchar("image"),
    projectId: varchar("projectId").notNull(),
    ...base
})


export const projectTeams = pgTable("project_teams", {
    name: varchar("name"),
    description: varchar("description"),
    image: varchar("image"),
    projectId: varchar("projectId").notNull(),
    ...base
})

export const teamMembers = pgTable("team_members", {
    teamId: varchar("teamId").notNull(),
    userId: varchar("userId").notNull(),
    role: roleEnum("role").notNull(),
    ...base
})