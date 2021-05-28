import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './infra/http/controllers/create-user.controller';
import { UsersRepositoryInMemory } from './repositories/in-memory/users.repository.in-memory';
import { User } from './infra/typeorm/entities/user.entity';
import { UsersRepository } from './infra/typeorm/repositories/users.repository';
import { CreateUserUseCase } from './useCases/createUser/create-user.useCase';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [
    CreateUserController
  ],
  providers: [
    CreateUserUseCase,
    {
      provide: 'USERS_REPOSITORY',
      inject: [
        UsersRepository
      ],
      useClass: UsersRepository
    }
  ],
  exports: []
})
export class UsersModule {}
