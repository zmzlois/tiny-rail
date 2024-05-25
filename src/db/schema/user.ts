import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    boolean,
    varchar,
} from "drizzle-orm/pg-core"

import type { AdapterAccountType } from "next-auth/adapters"
import { base } from "./base"




export const users = pgTable("user", {
    id: varchar("id").primaryKey(),
    github_id: integer("github_id").unique(),
    username: varchar("userName"),
    name: varchar("name"),
    email: varchar("email"),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: varchar("image"),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
    deleted: boolean("deleted").default(false).notNull(),

})

export const accounts = pgTable(
    "account",
    {
        userId: varchar("userId")
            .notNull()
            .references(() => users.id, { onDelete: "no action" }),
        type: varchar("type").$type<AdapterAccountType>().notNull(),
        provider: varchar("provider").notNull(),
        providerAccountId: integer("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: varchar("token_type"),
        scope: varchar("scope"),
        id_token: varchar("id_token"),
        session_state: varchar("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
)


export const sessions = pgTable("session", {
    id: varchar("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
})

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: varchar("identifier").notNull(),
        token: varchar("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (vt) => ({
        compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
    })
)
