import { User } from '../../../entities/user'
import { IRepository } from './repository'

export interface IUserRepository extends IRepository<User> {
  getByEmail (email: string): Promise<User | null>
}
