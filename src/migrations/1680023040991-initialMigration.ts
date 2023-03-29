import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1680023040991 implements MigrationInterface {
    name = 'initialMigration1680023040991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(12) NOT NULL, "lastName" character varying(12) NOT NULL, "password" text NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(72) NOT NULL, "mobileNumber" character varying(11) NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerUserId" uuid, "ownerClientId" uuid, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "UQ_beeaedb0da4d8e94fec6517f284" UNIQUE ("mobileNumber"), CONSTRAINT "REL_c3853b52fd8b37b0047a538c2d" UNIQUE ("ownerUserId"), CONSTRAINT "REL_b2835620bbee9e399dff8b4fda" UNIQUE ("ownerClientId"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(12) NOT NULL, "lastName" character varying(12) NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" uuid, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_c3853b52fd8b37b0047a538c2d8" FOREIGN KEY ("ownerUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_b2835620bbee9e399dff8b4fda9" FOREIGN KEY ("ownerClientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_17c0b2073ebd7875388fa98ab19" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_17c0b2073ebd7875388fa98ab19"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_b2835620bbee9e399dff8b4fda9"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_c3853b52fd8b37b0047a538c2d8"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
