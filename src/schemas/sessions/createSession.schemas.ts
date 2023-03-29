import * as yup from "yup";
import {
  ICreateSessionRequest,
  ICreateSessionResponse,
  IOwnerSession,
} from "../../interfaces/sessions.interface";
import { getClientResponseSchema } from "../clients/getClient.schemas";

export const ownerSessionResponseSchema: yup.SchemaOf<IOwnerSession> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    updatedAt: yup.date(),
    clients: yup.array(getClientResponseSchema),
    mobileNumber: yup.string(),
    email: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    id: yup.string(),
  })
  .transform((obj) => {
    return {
      ...obj,
      email: obj.contacts.email,
      mobileNumber: obj.contacts.mobileNumber,
    };
  });

export const createSessionRequestSchema: yup.SchemaOf<ICreateSessionRequest> =
  yup.object().shape({
    email: yup.string().email().trim().required(),
    password: yup.string().trim().required(),
  });

export const createSessionResponseSchema: yup.SchemaOf<ICreateSessionResponse> =
  yup.object().shape({
    user: yup.object().concat(ownerSessionResponseSchema),
    token: yup.string(),
  });
