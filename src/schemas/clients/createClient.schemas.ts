import * as yup from "yup";
import {
  ICreateClientRequest,
  ICreateClientResponse,
} from "../../interfaces/clients.interface";

export const createClientRequestSchema: yup.SchemaOf<ICreateClientRequest> = yup
  .object()
  .shape({
    firstName: yup.string().min(3).max(12).trim().required(),
    lastName: yup.string().min(3).max(12).trim().required(),
    email: yup.string().email().min(6).max(72).trim().required(),
    mobileNumber: yup.string().length(11).trim().required(),
  });

export const createClientResponseSchema: yup.SchemaOf<ICreateClientResponse> =
  yup.object().shape({
    createdAt: yup.date(),
    updatedAt: yup.date(),
    mobileNumber: yup.string(),
    email: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    id: yup.string(),
  });
