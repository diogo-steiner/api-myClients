import { userRepository } from "../../repositories";

export const deleteUserService = async (userId: string): Promise<{}> => {
  await userRepository.delete({ id: userId });
  return {};
};
