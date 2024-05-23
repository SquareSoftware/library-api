import { injectable } from 'inversify'
import { BaseRepository } from './base'
import { User } from '../../entities/user'
import { UserDocument, UserMongoDBDocument } from '../db/documents/user'
import { IUserRepository } from './contracts/user'
import { Email } from '../../entities/email'
import { Phone } from '../../entities/phone'

@injectable()
export class UserRepository extends BaseRepository<User, UserDocument> implements IUserRepository {
  model = UserMongoDBDocument

  toEntity(document: UserDocument): User {
    const user = new User()

    user.name = document.name
    user.id = document.id
    user.birth = document.birth
    user.email = Email.create(document.email)
    user.phone = Phone.create(document.phone)
    user.password = document.password
    user.type = document.type

    return user
  }

  toDocument(user: User): UserDocument {
    return {
      id: user.id,
      name: user.name,
      email: user.email.value,
      phone: user.phone.value,
      birth: user.birth,
      password: user.password,
      type: user.type
    }
  }

  async getByEmail (email: string): Promise<User | null> {
    const data = await this.model.findOne({ email })
  
    if (!data) return null

    return this.toEntity(data)
  }
}