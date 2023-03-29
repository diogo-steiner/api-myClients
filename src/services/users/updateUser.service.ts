import { hashSync } from "bcrypt";
import { AppError } from "../../errors";
import { IUpdateUserRequest } from "../../interfaces/users.interface";
import { contactRepository, userRepository } from "../../repositories";
import { ownerSessionResponseSchema } from "../../schemas";

export const updateUserService = async (
  dataUpdate: IUpdateUserRequest,
  userId: string
) => {
  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });

  if (dataUpdate.email == user.contacts.email) {
    delete dataUpdate.email;
  }

  if (dataUpdate.mobileNumber == user.contacts.mobileNumber) {
    delete dataUpdate.mobileNumber;
  }

  if (dataUpdate.email || dataUpdate.mobileNumber) {
    const findContactExists = await contactRepository.findOne({
      where: [
        { email: dataUpdate.email },
        { mobileNumber: dataUpdate.mobileNumber },
      ],
    });

    if (findContactExists) {
      if (dataUpdate.email == findContactExists.email) {
        throw new AppError(409, "Email already registered");
      }
      if (dataUpdate.mobileNumber == findContactExists.mobileNumber) {
        throw new AppError(409, "Mobile number already registered");
      }
    }

    let contactUpdated = contactRepository.create({
      ...user.contacts,
      ...dataUpdate,
    });
    contactUpdated = await contactRepository.save(contactUpdated);

    user.contacts = contactUpdated;
  }

  if (dataUpdate.password) {
    dataUpdate.password = hashSync(dataUpdate.password, 10);
  }

  let userUpdated = userRepository.create({ ...user, ...dataUpdate });
  userUpdated = await userRepository.save(userUpdated);

  return await ownerSessionResponseSchema.validate(userUpdated, {
    stripUnknown: true,
  });
};
