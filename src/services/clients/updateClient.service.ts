import { AppError } from "../../errors";
import { IUpdateClientRequest } from "../../interfaces/clients.interface";
import { clientRepository, contactRepository } from "../../repositories";
import { getClientResponseSchema } from "../../schemas";

export const updateClientService = async (
  dataUpdate: IUpdateClientRequest,
  clientId: string
) => {
  const client = await clientRepository.findOne({
    where: { id: clientId },
    relations: { contacts: true },
  });

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  if (dataUpdate.email == client.contacts.email) {
    delete dataUpdate.email;
  }

  if (dataUpdate.mobileNumber == client.contacts.mobileNumber) {
    delete dataUpdate.mobileNumber;
  }

  if (dataUpdate.email || dataUpdate.mobileNumber) {
    const findContactExist = await contactRepository.findOne({
      where: [
        { email: dataUpdate.email },
        { mobileNumber: dataUpdate.mobileNumber },
      ],
    });

    if (findContactExist) {
      if (dataUpdate.email == findContactExist.email) {
        throw new AppError(409, "Email already registered");
      }

      if (dataUpdate.mobileNumber == findContactExist.mobileNumber) {
        throw new AppError(409, "Mobile number already registered");
      }
    }

    let contactUpdated = contactRepository.create({
      ...client.contacts,
      ...dataUpdate,
    });
    contactUpdated = await contactRepository.save(contactUpdated);
    client.contacts = { ...client.contacts, ...contactUpdated };
  }

  let clientUpdated = clientRepository.create({ ...client, ...dataUpdate });
  clientUpdated = await clientRepository.save(clientUpdated);

  return await getClientResponseSchema.validate(clientUpdated, {
    stripUnknown: true,
  });
};
