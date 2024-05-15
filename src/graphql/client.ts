import { get } from "http";
import { Client, cacheExchange, fetchExchange } from "urql"
import dotenv from "dotenv"

dotenv.config();

function getEnv(key: string): string {
    const value = process.env.key;
    if (!value) {
        throw new Error(`Missing required environment variable ${key}`);
    }
    return value;
}

export const userClient = new Client({
    url: "https://backboard.railway.app/graphql/v2",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        const token = process.env.RAILWAY_PERSONAL_TOKEN;
        return {
            headers: { authorization: token ? `Bearer ${token}` : '', content: "application/json", origin: "https://railway.app" },
        };
    },
});

export const teamClient = new Client({
    url: "https://backboard.railway.app/graphql/v2",
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        const token = process.env.RAILWAY_TEAM_TOKEN;
        return {
            headers: { authorization: token ? `Bearer ${token}` : '', content: "application/json", origin: "https://railway.app" },
        };
    },
});
