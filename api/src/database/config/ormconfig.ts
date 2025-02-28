import { DataSourceOptions } from 'typeorm';
import * as path from 'path';
import "dotenv/config";

const ormconfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [path.join(__dirname, '/../**/*.entity.{js,ts}')],
    migrations: [path.join(__dirname, '/../**/migrations/*.{js,ts}')]
};

export default ormconfig;