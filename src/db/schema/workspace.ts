import { base } from "./base";
import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
} from "drizzle-orm/pg-core"


export const workspaces = pgTable("workspace", {
    name: text("name"),
    description: text("description"),
    image: text("image"),
    ownerId: text("ownerId").notNull(),
    ...base
})
