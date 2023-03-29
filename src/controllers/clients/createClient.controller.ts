import { Request, Response } from "express";
import { createClientService } from "../../services";

export const createClientController = async (req: Request, res: Response) => {
  const newClient = await createClientService(req.body, req.user.id);
  return res.status(201).json(newClient);
};
