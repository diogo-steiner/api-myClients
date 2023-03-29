import "express-async-errors";
import * as dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import cors from "cors"
import { handleErrors } from "./errors";
import { clientsRoutes, sessionsRoutes, usersRoutes } from "./routes";

dotenv.config();

export const app = express();
app.use(cors())
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/sessions", sessionsRoutes);
app.use("/clients", clientsRoutes);
app.use(handleErrors);
