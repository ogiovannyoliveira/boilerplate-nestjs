import { EntityRepository } from "typeorm";
import { v4 as uuid } from "uuid";
import { CreateUserDTO } from "../../dtos/create-user.dto";
import { User } from "../../infra/typeorm/entities/user.entity";
import { IUserRepository } from "../IUserRepository";

@EntityRepository(User)
export class UsersRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create({ name, email }: CreateUserDTO): Promise<User> {
    console.log('canto errado');

    const user = {
      id: uuid(),
      name,
      email,
      created_at: new Date()
    }

    this.users.push(user)

    return user
  }

  show(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
}