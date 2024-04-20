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
}