import { Request, Response } from "express";
import { deleteClientService } from "../../services";

export const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.clientId);
  return res.status(204).json({});
};
