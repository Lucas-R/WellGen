import { DataSource } from 'typeorm';
import { conn } from '../config/conn';

describe('Conexão com o Banco de Dados (TypeORM)', () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await conn.initialize();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Deve estabelecer uma conexão com o banco de dados', () => {
    expect(connection.isInitialized).toBe(true);
  });
});