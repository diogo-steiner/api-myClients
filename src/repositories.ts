import { AppDataSource } from "./data-source";
import { Client, Contact, User } from "./entities";

export const userRepository = AppDataSource.getRepository(User);
export const clientRepository = AppDataSource.getRepository(Client);
export const contactRepository = AppDataSource.getRepository(Contact);
