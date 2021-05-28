import { CreateUserDTO } from "../dtos/create-user.dto";
import { User } from "../infra/typeorm/entities/user.entity";

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<User>
  show(id: string): Promise<User>
  list(): Promise<User[]>
}