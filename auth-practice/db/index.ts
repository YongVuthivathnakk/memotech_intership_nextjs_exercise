import * as dotenv from "dotenv";
import { Pool } from 'pg'
import * as schema from "./schema"
import { drizzle } from "drizzle-orm/node-postgres";


dotenv.config({ path: ".env.local" });

const pool = new Pool(
     {connectionString: process.env.DATABASE_URL!,}
)

export const db = drizzle(pool, {schema});