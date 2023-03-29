import * as yup from "yup";
import { IUpdateUserRequest } from "../../interfaces/users.interface";
import { regexOnlyNumber } from "../utils/regexs";

export const updateUserRequestSchema: yup.SchemaOf<IUpdateUserRequest> = yup
  .object()
  .shape({
    firstName: yup.string().min(3).max(32).trim(),
    lastName: yup.string().min(3).max(12).trim(),
    email: yup.string().min(6).max(72).trim(),
    mobileNumber: yup
      .string()
      .min(6)
      .max(72)
      .trim()
      .transform((value: string) => value.replace(regexOnlyNumber, "")),
    password: yup.string().test({
      test(value: string, ctx) {
        if (value == undefined) return true;

        value = value.trim();

        if (value.length < 6 || value == "") {
          return ctx.createError({
            message: "password must be at least 6 characters",
          });
        } else if (value.length > 72) {
          return ctx.createError({
            message: "password must be at most 72 characters",
          });
        }

        return true;
      },
    }),
  });
