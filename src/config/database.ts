import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const database: TypeOrmModuleOptions = {
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: ['error', 'warn']
}