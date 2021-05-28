import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/modules/users/dtos/create-user.dto";
import { CreateUserUseCase } from "src/modules/users/useCases/createUser/create-user.useCase";
import { User } from "../../typeorm/entities/user.entity";

@Controller('users')
export class CreateUserController {
  constructor(
    private createUsersUseCase: CreateUserUseCase
  ) {}

  @Post()
  public async execute(
    @Body() user: CreateUserDTO
  ): Promise<User> {
    // faz as tratativas necessárias nos dados
    return await this.createUsersUseCase.execute(user);
  }
}