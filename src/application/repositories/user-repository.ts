import { User } from "../../domain/entities/user";

export interface IUserRepository {
  list(): Promise<User>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
