import dotenv from "dotenv";

dotenv.config();

type Env = {
    [key: string]: string;
};

const NODE_ENV = process.env.NODE_ENV || "development";

export const env: Env = {
    ORIGIN_URL:
        NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://tiny-rail-production.up.railway.app",
    DATABASE_URL: process.env.DATABASE_URL!,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID!,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET!,
    REDIRECT_URI: process.env.REDIRECT_URI!,
    RAILWAY_TEAM_TOKEN: process.env.RAILWAY_TEAM_TOKEN!,
    RAILWAY_API: process.env.RAILWAY_API!,
    RAILWAY_TEAM_ID: process.env.RAILWAY_TEAM_ID!,
    RAILWAY_PUBLIC_URL: process.env.RAILWAY_PUBLIC_URL!,
};
export type DatabaseSource = "MySQL" | "Postgres" | "MongoDB" | "Redis";
export const variables = ({ source }: { source: DatabaseSource }) => {
    if (source === "MySQL") {
        return {
            MYSQLDATABASE: "${{MYSQL_DATABASE}}",
            MYSQLHOST: "${{RAILWAY_TCP_PROXY_DOMAIN}}",
            MYSQLPASSWORD: "${{MYSQL_ROOT_PASSWORD}}",
            MYSQLPORT: "${{RAILWAY_TCP_PROXY_PORT}}",
            MYSQLUSER: "root",
            MYSQL_DATABASE: "railway",
            MYSQL_PRIVATE_URL:
                "mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:3306/${{MYSQL_DATABASE}}",
            MYSQL_ROOT_PASSWORD: "raWJgYxAmOjrwSEXUnukZNuSoqxdaIRS",
            MYSQL_URL:
                "mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}/${{MYSQL_DATABASE}}",
        };
    }

    if (source === "Postgres") {
        return {
            DATABASE_PRIVATE_URL:
                "postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:5432/${{PGDATABASE}}",
            DATABASE_URL:
                "postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}/${{PGDATABASE}}",
            PGDATA: "/var/lib/postgresql/data/pgdata",
            PGDATABASE: "${{POSTGRES_DB}}",
            PGHOST: "${{RAILWAY_TCP_PROXY_DOMAIN}}",
            PGPASSWORD: "${{POSTGRES_PASSWORD}}",
            PGPORT: "${{RAILWAY_TCP_PROXY_PORT}}",
            PGPRIVATEHOST: "${{RAILWAY_PRIVATE_DOMAIN}}",
            PGUSER: "${{POSTGRES_USER}}",
            POSTGRES_DB: "railway",
            POSTGRES_PASSWORD: "DBRGqOFWzpjUIMsRzFfJFoSYzqQKezLp",
            POSTGRES_USER: "postgres",
            SSL_CERT_DAYS: "820",
        };
    }

    if (source === "MongoDB") {
        return {
            MONGOHOST: "${{RAILWAY_TCP_PROXY_DOMAIN}}",
            MONGOPASSWORD: "${{MONGO_INITDB_ROOT_PASSWORD}}",
            MONGOPORT: "${{RAILWAY_TCP_PROXY_PORT}}",
            MONGOUSER: "${{MONGO_INITDB_ROOT_USERNAME}}",
            MONGO_INITDB_ROOT_PASSWORD: "fzFZcLyWPDdDJrRawczIdaCzFVnOajOX",
            MONGO_INITDB_ROOT_USERNAME: "mongo",
            MONGO_PRIVATE_URL:
                "mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:27017",
            MONGO_URL:
                "mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}",
        };
    }

    if (source === "Redis") {
        return {
            RAILWAY_RUN_AS_ROOT: "true",
            RAILWAY_RUN_UID: "0",
            REDISHOST: "${{RAILWAY_TCP_PROXY_DOMAIN}}",
            REDISPASSWORD: "${{REDIS_PASSWORD}}",
            REDISPORT: "${{RAILWAY_TCP_PROXY_PORT}}",
            REDISUSER: "default",
            REDIS_PASSWORD: "CaeUeyrRfjSgVwywDzuYtSNRAEfJFfEJ",
            REDIS_PRIVATE_URL:
                "redis://default:${{REDIS_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:6379",
            REDIS_URL:
                "redis://default:${{REDIS_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}",
        };
    }
};
