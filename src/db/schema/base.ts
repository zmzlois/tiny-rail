import { pgTable, text, varchar, timestamp, boolean, foreignKey, primaryKey, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const base = {
    id: varchar("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    createdAt: timestamp("createdAt", { mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updatedAt", { mode: 'string' }).defaultNow().notNull(),
    deleted: boolean("deleted").default(false).notNull(),
}

export const externalBase = {
    externalId: varchar("external_id").notNull(),
    ...base,
}