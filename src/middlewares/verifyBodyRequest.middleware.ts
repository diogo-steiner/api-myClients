import { NextFunction, Request, Response } from "express";
import { ObjectSchema, ValidationError } from "yup";
import { AppError } from "../errors";

export const verifyBodyRequestMiddleware =
  (schema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const bodyValidated = await schema
      .validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      })
      .catch((error: ValidationError) => {
        throw new AppError(400, error.errors.join(" | "));
      });

    req.body = bodyValidated;

    return next();
  };
