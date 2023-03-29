import * as yup from "yup";
import { IUpdateClientRequest } from "../../interfaces/clients.interface";
import { regexOnlyNumber } from "../utils/regexs";

export const updateClientRequestSchema: yup.SchemaOf<IUpdateClientRequest> = yup
  .object()
  .shape({
    firstName: yup.string().min(3).max(12).trim(),
    lastName: yup.string().min(3).max(12).trim(),
    email: yup.string().email().min(6).max(72).trim(),
    mobileNumber: yup
      .string()
      .length(11)
      .transform((value: string) => value.replace(regexOnlyNumber, "")),
  });
