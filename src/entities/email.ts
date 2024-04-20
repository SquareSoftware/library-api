import { ValueObject } from "./core/value-object"

export class Email extends ValueObject<string> {
  protected validate (value: string) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!pattern.test(value)) throw new Error('Invalid email address')
  }

  static create (email: string) {
    return new Email(email)
  }
}