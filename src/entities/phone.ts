import { ValueObject } from './core/value-object'
import { InvalidPhone } from './errors/invalid-phone'

export class Phone extends ValueObject<string> {
  protected validate(value: string): void {
    const pattern = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    
    if (!pattern.test(value)) throw new InvalidPhone()
  }

  static create (phone: string) {
    return new Phone(phone)
  }
}