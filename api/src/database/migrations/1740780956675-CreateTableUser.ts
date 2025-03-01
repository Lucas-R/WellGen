import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1740780956675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

        await queryRunner.createTable(
            new Table({
              name: 'user',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'email',
                  type: 'varchar',
                  isNullable: true,
                  isUnique: true,
                },
                {
                  name: 'password',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'birth',
                  type: 'date',
                  isNullable: true,
                },
                {
                  name: 'birth_place',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'death',
                  type: 'date',
                  isNullable: true,
                },
                {
                    name: 'gender',
                    type: 'enum',
                    enum: ['male', 'female'],
                },
                {
                  name: 'phone',
                  type: 'varchar',
                  isNullable: true,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP',
                  onUpdate: 'CURRENT_TIMESTAMP',
                },
              ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP EXTENSION IF EXISTS "uuid-ossp";');
    }

}
