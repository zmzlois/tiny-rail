import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import type { AdapterAccountType } from "next-auth/adapters"
export { users, accounts } from "./schema/user"
export { projects } from "./schema/project"
export { workspaces } from "./schema/workspace"


const connectionString = process.env.AUTH_DRIZZLE_URL!
let pool: postgres.Sql<{}>
if (process.env.NODE_ENV === "production") {
    pool = postgres(connectionString, { max: 30 })
} else {
    // @ts-expect-error shut up
    if (!global.pool) {
        // @ts-expect-error shut up
        global.pool = postgres(connectionString, { max: 30 })
    }

    // @ts-expect-error shut up
    pool = global.pool
}

export const db = drizzle(pool)

