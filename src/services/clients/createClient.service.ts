import { AppError } from "../../errors";
import { ICreateClientRequest } from "../../interfaces/clients.interface";
import {
  clientRepository,
  contactRepository,
  userRepository,
} from "../../repositories";
import { createClientResponseSchema } from "../../schemas";

export const createClientService = async (
  dataClient: ICreateClientRequest,
  ownerId: string
) => {
  const findContactExist = await contactRepository.findOne({
    where: [
      { email: dataClient.email },
      { mobileNumber: dataClient.mobileNumber },
    ],
  });

  if (findContactExist) {
    if (findContactExist.email == dataClient.email) {
      throw new AppError(409, "Email already registered");
    } else {
      throw new AppError(404, "Mobile number already registered");
    }
  }

  const owner = await userRepository.findOneBy({ id: ownerId });

  let newClient = clientRepository.create({ ...dataClient, owner });
  newClient = await clientRepository.save(newClient);

  let contactClient = contactRepository.create({
    ...dataClient,
    ownerClient: newClient,
  });
  contactClient = await contactRepository.save(contactClient);

  const returnNewClient = {
    ...newClient,
    email: contactClient.email,
    mobileNumber: contactClient.mobileNumber,
  };
  return await createClientResponseSchema.validate(returnNewClient, {
    stripUnknown: true,
  });
};
