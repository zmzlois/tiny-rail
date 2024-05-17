import { use } from "react";
import { base } from "./base";
import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
} from "drizzle-orm/pg-core"

export const projects = pgTable("projects", {
    name: text("name"),
    description: text("description"),
    image: text("image"),
    workspaceId: text("workspaceId").notNull(),
    ...base
})

export const services = pgTable("project_services", {
    name: text("name"),
    description: text("description"),
    image: text("image"),
    projectId: text("projectId").notNull(),
    ...base
})


export const projectTeams = pgTable("project_teams", {
    name: text("name"),
    description: text("description"),
    image: text("image"),
    projectId: text("projectId").notNull(),
    ...base
})

export const teamMembers = pgTable("team_members", {
    teamId: text("teamId").notNull(),
    userId: text("userId").notNull(),
    role: text("role").notNull(),
    ...base
})