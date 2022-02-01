import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1643727991187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE user ADD expiration_date DATE `);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
