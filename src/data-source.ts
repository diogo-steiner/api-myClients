import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import path from "path";

dotenv.config();
const pathEntities: string = path.join(__dirname, "./entities/*.{js,ts}");
const pathMigrations: string = path.join(__dirname, "./migrations/*.{js,ts}");

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  logging: true,
  synchronize: false,
  entities: [pathEntities],
  migrations: [pathMigrations],
});
