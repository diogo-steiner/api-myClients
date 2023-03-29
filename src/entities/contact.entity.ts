import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User, Client } from ".";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ length: 11, unique: true })
  mobileNumber: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => User, { onDelete: "CASCADE", nullable: true })
  @JoinColumn()
  ownerUser: User;

  @OneToOne(() => Client, { onDelete: "CASCADE", nullable: true })
  @JoinColumn()
  ownerClient: Client;
}
