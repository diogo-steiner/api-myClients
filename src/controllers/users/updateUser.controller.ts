import { Request, Response } from "express";
import { updateUserService } from "../../services";

export const updateUserController = async (req: Request, res: Response) => {
  const userUpdated = await updateUserService(req.body, req.user.id);
  return res.status(200).json(userUpdated);
};
