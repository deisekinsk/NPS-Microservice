import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614626481386 implements MigrationInterface {
//Crio a tabela
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }
//Deleto a tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
