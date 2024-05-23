import { Command } from '../../entities/core/command'
import { Email } from '../../entities/email'
import { IRequest } from 'mediatr-ts'
import { Phone } from '../../entities/phone'

export interface ISignupPayload {
  email: string

  password: string

  name: string

  birth: Date

  phone: string
}

export class SignupCommand implements Command<ISignupPayload>, IRequest<ISignupPayload> {
  payload!: ISignupPayload

  constructor (payload: ISignupPayload) {
    this.payload = payload

    this.verify()
  }

  verify (): void {
    Email.create(this.payload.email)
    Phone.create(this.payload.phone)
  }
}