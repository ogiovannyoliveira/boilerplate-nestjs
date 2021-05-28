import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "../../dtos/create-user.dto";
import { User } from "../../infra/typeorm/entities/user.entity";
import { UsersRepository } from "../../infra/typeorm/repositories/users.repository";
import { IUserRepository } from "../../repositories/IUserRepository";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('USERS_REPOSITORY')
    private ormRepository: IUserRepository
  ) {}

  public async execute(user: CreateUserDTO): Promise<User> {
    return await this.ormRepository.create(user)
  }
}