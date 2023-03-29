import { AppError } from "../../errors";
import { ICreateSessionResponse } from "../../interfaces/sessions.interface";
import { ICreateUserRequest } from "../../interfaces/users.interface";
import { contactRepository, userRepository } from "../../repositories";
import { createSessionService } from "..";

export const createUserService = async (
  dataUser: ICreateUserRequest
): Promise<ICreateSessionResponse> => {
  const findContacts = await contactRepository.findOne({
    where: [{ email: dataUser.email }, { mobileNumber: dataUser.mobileNumber }],
  });

  if (dataUser.email == findContacts?.email) {
    throw new AppError(409, "Email already registered");
  }

  if (dataUser.mobileNumber == findContacts?.mobileNumber) {
    throw new AppError(409, "Mobile number already registered");
  }

  let newUser = userRepository.create(dataUser);
  newUser = await userRepository.save(newUser);

  let newContact = contactRepository.create({
    ...dataUser,
    ownerUser: newUser,
  });
  newContact = await contactRepository.save(newContact);

  const session = await createSessionService({
    email: dataUser.email,
    password: dataUser.password,
  });

  return session;
};
