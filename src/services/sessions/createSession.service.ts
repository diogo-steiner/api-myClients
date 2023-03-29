import { compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import {
  ICreateSessionRequest,
  ICreateSessionResponse,
} from "../../interfaces/sessions.interface";
import { contactRepository } from "../../repositories";
import { createSessionResponseSchema } from "../../schemas";

export const createSessionService = async (
  dataSession: ICreateSessionRequest
): Promise<ICreateSessionResponse> => {
  const onwerSession = await contactRepository
    .findOne({
      where: { email: dataSession.email },
      relations: { ownerUser: { contacts: true, clients: { contacts: true } } },
    })
    .then((value: Contact) => value.ownerUser)
    .catch(() => {
      throw new AppError(401, "Email or password invalid");
    });

  const matchPassword = await compare(
    dataSession.password,
    onwerSession.password
  );

  if (!matchPassword) {
    throw new AppError(401, "Email or password invalid");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: onwerSession.id,
    expiresIn: "6h",
  });

  const session = {
    token: token,
    user: onwerSession,
  };

  return await createSessionResponseSchema.validate(session, {
    stripUnknown: true,
  });
};
