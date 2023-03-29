import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers";
import {
  verifyAuthRequestMiddleware,
  verifyBodyRequestMiddleware,
} from "../middlewares";
import { createUserRequestSchema, updateUserRequestSchema } from "../schemas";

export const usersRoutes = Router();
usersRoutes.post(
  "",
  verifyBodyRequestMiddleware(createUserRequestSchema),
  createUserController
);
usersRoutes.patch(
  "",
  verifyAuthRequestMiddleware,
  verifyBodyRequestMiddleware(updateUserRequestSchema),
  updateUserController
);
usersRoutes.delete("", verifyAuthRequestMiddleware, deleteUserController);
