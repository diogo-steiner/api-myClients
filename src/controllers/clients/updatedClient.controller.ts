import { Request, Response } from "express";
import { updateClientService } from "../../services";

export const updateClientController = async (req: Request, res: Response) => {
  const clientUpdated = await updateClientService(
    req.body,
    req.params.clientId
  );
  return res.status(200).json(clientUpdated);
};
