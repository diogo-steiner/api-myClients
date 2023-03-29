import { IClient } from "./clients.interface";

export interface ICreateSessionRequest {
  email: string;
  password: string;
}

export interface IOwnerSession {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  clients: IClient[];
  updatedAt: Date;
  createdAt: Date;
}

export interface ICreateSessionResponse {
  token: string;
  user: IOwnerSession;
}
