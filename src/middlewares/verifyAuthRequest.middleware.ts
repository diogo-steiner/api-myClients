import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import { AppError } from "../errors";

export const verifyAuthRequestMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError(401, "Missing headers authorization");
  }

  const token = authToken.split(" ")[1];

  return jwt.verify(
    token,
    process.env.SECRET_KEY,
    (error: jwt.VerifyErrors, decoded) => {
      if (error) {
        throw new AppError(401, error.message);
      }

      req.user = {
        id: String(decoded.sub),
      };
      return next();
    }
  );
};
