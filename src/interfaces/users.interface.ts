export interface ICreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
}

export interface IUpdateUserRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
  password?: string;
}
