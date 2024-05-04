import { Command } from '../../entities/core/command'
import { Email } from '../../entities/email'

export interface ISignupPayload {
  email: string

  password: string
}

export class SignupCommand implements Command<ISignupPayload> {
  payload!: ISignupPayload

  verify (): void {
    Email.create(this.payload.email)
  }
}