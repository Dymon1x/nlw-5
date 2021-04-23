import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1618922609423 implements MigrationInterface {

    //id universal, que dificilmente será repetido
    // generationStrategy: "uuid", //o proprio banco fica responsavel por gerar 

    public async up(queryRunner: QueryRunner): Promise<void> { //esse seria o run
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()" //irá alterar para a hora que foi feita a alteração - pega a hora atual
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {//esse seria para reverter o que foi feito pelo run
        await queryRunner.dropTable("settings");
    }

}
