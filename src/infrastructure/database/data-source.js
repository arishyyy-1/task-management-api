import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "../../config/config.js";
import { TaskSchema } from "../../domain/entities/Task.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  ssl: config.db.ssl ? { rejectUnauthorized: false } : false,
  synchronize: true,
  entities: [TaskSchema],
});