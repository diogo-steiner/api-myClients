import { Router } from "express";
import { createSessionController, getSessionController } from "../controllers";
import {
  verifyAuthRequestMiddleware,
  verifyBodyRequestMiddleware,
} from "../middlewares";
import { createSessionRequestSchema } from "../schemas";

export const sessionsRoutes = Router();
sessionsRoutes.post(
  "",
  verifyBodyRequestMiddleware(createSessionRequestSchema),
  createSessionController
);
sessionsRoutes.get("", verifyAuthRequestMiddleware, getSessionController);
