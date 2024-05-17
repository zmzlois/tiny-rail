import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql", // "mysql" | "sqlite"
    schema: "./src/db/schema",

    out: "./src/db/generated",
    dbCredentials: {
        url: process.env.AUTH_DRIZZLE_URL!,
    }
});