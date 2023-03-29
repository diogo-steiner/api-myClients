import { Request, Response } from "express";
import { getSessionService } from "../../services/sessions/getSession.service";

export const getSessionController = async (req: Request, res: Response) => {
  const session = await getSessionService(req.user.id);
  return res.status(200).json(session);
};
