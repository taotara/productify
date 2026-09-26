import {drizzle} from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema.ts";
import { ENV } from "../config/env.ts";



if (!ENV.DATABASE_URL) {
    throw new Error("DB_URL is not set in environment variables");
}

// Initialize PostgreSQL connection pool
const pool = new Pool({ connectionString: ENV.DATABASE_URL });

// Log when first connection is made
pool.on("connect", () => {
    console.log("Database connected successfully");
});

// Log when an error occurs
pool.on("error", () => {
    console.log("Database connection error:", Error);
});

export const db = drizzle({client: pool, schema});
