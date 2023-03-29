import { Request, Response } from "express";
import { createSessionService } from "../../services";

export const createSessionController = async (req: Request, res: Response) => {
  const onwerSession = await createSessionService(req.body);
  return res.status(200).json(onwerSession);
};
