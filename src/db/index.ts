import postgres from "postgres"
import { drizzle } from "drizzle-orm/postgres-js"
import type { AdapterAccountType } from "next-auth/adapters"
export { users, accounts } from "./schema/user"
export { projects } from "./schema/project"
export { workspaces } from "./schema/workspace"

const connectionString = process.env.AUTH_DRIZZLE_URL!
const pool = postgres(connectionString, { max: 10 })

export const db = drizzle(pool)

