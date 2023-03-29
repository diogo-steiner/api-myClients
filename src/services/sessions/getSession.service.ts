import { userRepository } from "../../repositories";
import { ownerSessionResponseSchema } from "../../schemas";

export const getSessionService = async (ownerId: string) => {
  const ownerSession = await userRepository.findOne({
    where: { id: ownerId },
    relations: {
      contacts: true,
      clients: { contacts: true },
    },
  });
  return await ownerSessionResponseSchema.validate(ownerSession, {
    stripUnknown: true,
  });
};
