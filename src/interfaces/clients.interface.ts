export interface ICreateClientRequest {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

export interface ICreateClientResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IClient extends ICreateClientResponse {}

export interface IUpdateClientRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
}
