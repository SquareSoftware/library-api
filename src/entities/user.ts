import { ISignupPayload } from '../commands/auth/signup'
import { Encryptor } from '../infra/cryptography/encryptor'
import { BaseEntity } from './core/base-entity'
import { Email } from './email'
import { Phone } from './phone'
import { UserType } from './user-type'

export class User extends BaseEntity {
  name!: string

  birth!: Date

  email!: Email

  password!: string

  phone!: Phone

  type!: UserType

  static async signup (payload: ISignupPayload) {
    const encryptor = new Encryptor()

    const user = new User()

    user.name = payload.name
    user.birth = payload.birth
    user.email = Email.create(payload.email)
    user.phone = Phone.create(payload.phone)
    user.password = await encryptor.encrypt(payload.password)
    user.type = UserType.CUSTOMER

    return user
  }
}