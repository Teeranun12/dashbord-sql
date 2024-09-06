import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

if (
  !process.env.DB_HOST ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error("Database configuration is missing in environment variables");
}

const client = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,

});

const currentTime = new Date().toLocaleString();

client.on('error', (err) => {
  console.error( currentTime , 'Unexpected error on idle client', err);
  process.exit(-1);
});

export default client;
