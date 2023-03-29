import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User, Contact } from ".";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 12 })
  firstName: string;

  @Column({ length: 12 })
  lastName: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.clients, { onDelete: "CASCADE" })
  owner: User;

  @OneToOne(() => Contact, (contact) => contact.ownerClient)
  contacts: Contact;
}
