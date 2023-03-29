import * as yup from "yup";
import { ICreateUserRequest } from "../../interfaces/users.interface";
import { regexOnlyNumber } from "../utils/regexs";

export const createUserRequestSchema: yup.SchemaOf<ICreateUserRequest> = yup
  .object()
  .shape({
    firstName: yup.string().min(3).max(12).trim().required(),
    lastName: yup.string().min(3).max(12).trim().required(),
    email: yup.string().email().min(6).max(72).trim().required(),
    mobileNumber: yup
      .string()
      .length(11)
      .trim()
      .required()
      .transform((value: string) => value.replace(regexOnlyNumber, "")),
    password: yup.string().min(6).max(72).trim().required(),
  });
