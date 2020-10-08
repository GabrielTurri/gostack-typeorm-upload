import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransactions1602187511614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary:true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'number',
            isNullable: false,
          },
          {
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
