import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { hashSync } from "bcrypt";
import { Client, Contact } from ".";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 12 })
  firstName: string;

  @Column({ length: 12 })
  lastName: string;

  @Column({ type: "text" })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => Contact, (contact) => contact.ownerUser)
  contacts: Contact;

  @OneToMany(() => Client, (client) => client.owner)
  clients: Client[];
}
