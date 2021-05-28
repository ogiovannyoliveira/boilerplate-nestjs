import { UsersRepositoryInMemory } from "../../repositories/in-memory/users.repository.in-memory"
import { CreateUserUseCase } from "./create-user.useCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it('should be able to create a new user', async () => {
    const createdUser = await createUserUseCase.execute({
      name: 'User 01',
      email: 'user01@mail.com',
    });

    expect(createdUser).toHaveProperty('id');
  })
})