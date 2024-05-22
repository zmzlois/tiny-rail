import dotenv from 'dotenv';

dotenv.config();


type Env = {
    [key: string]: string;
}

const NODE_ENV = process.env.NODE_ENV || "development";

export const env: Env = {

    ORIGIN_URL: NODE_ENV === "development" ? "http://localhost:3000" : "https://tiny-rail-production.up.railway.app",
    DATABASE_URL: process.env.DATABASE_URL!,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID!,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET!,
    REDIRECT_URI: process.env.REDIRECT_URI!,
    RAILWAY_TEAM_TOKEN: process.env.RAILWAY_TEAM_TOKEN!,
    RAILWAY_API: process.env.RAILWAY_API!,
    RAILWAY_TEAM_ID: process.env.RAILWAY_TEAM_ID!,
    RAILWAY_PUBLIC_URL: process.env.RAILWAY_PUBLIC_URL!,
}