import { AppError } from "../../errors";
import { clientRepository } from "../../repositories";

export const deleteClientService = async (clientId: string) => {
  const client = await clientRepository.exist({ where: { id: clientId } });

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  await clientRepository.delete({ id: clientId });

  return {};
};
