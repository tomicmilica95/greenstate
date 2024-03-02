import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Task } from './model/Task';
import { User } from './model/User';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT || '5433'),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,

  synchronize: false,
  logging: true,
  entities: [User, Task],
  migrations: [__dirname + '/migrations/*.ts'],
  subscribers: [],
});
