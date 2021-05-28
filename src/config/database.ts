import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const database: TypeOrmModuleOptions = {
  type: 'postgres',
  port: Number(process.env.DB_PORT || 5432),
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'giovanny',
  password: process.env.DB_PASS || 'dv1010aa',
  database: process.env.DB_NAME || 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: ['error', 'warn']
}