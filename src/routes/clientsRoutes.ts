import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  updateClientController,
} from "../controllers";
import {
  verifyAuthRequestMiddleware,
  verifyBodyRequestMiddleware,
} from "../middlewares";
import {
  createClientRequestSchema,
  updateClientRequestSchema,
} from "../schemas";

export const clientsRoutes = Router();
clientsRoutes.post(
  "",
  verifyAuthRequestMiddleware,
  verifyBodyRequestMiddleware(createClientRequestSchema),
  createClientController
);
clientsRoutes.patch(
  "/:clientId",
  verifyAuthRequestMiddleware,
  verifyBodyRequestMiddleware(updateClientRequestSchema),
  updateClientController
);
clientsRoutes.delete(
  "/:clientId",
  verifyAuthRequestMiddleware,
  deleteClientController
);
