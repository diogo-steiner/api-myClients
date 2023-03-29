import * as yup from "yup";
import { IClient } from "../../interfaces/clients.interface";

export const getClientResponseSchema: yup.SchemaOf<IClient> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    updatedAt: yup.date(),
    mobileNumber: yup.string(),
    email: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    id: yup.string(),
  })
  .transform((client) => {
    return {
      ...client,
      email: client.contacts.email,
      mobileNumber: client.contacts.mobileNumber,
    };
  });
