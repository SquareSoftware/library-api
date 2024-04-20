import { ValueObject } from './core/value-object'

export class Phone extends ValueObject<string> {
  protected validate(value: string): void {
    const pattern = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    
    if (!pattern.test(value)) throw new Error('Invalid phone number')
  }

  static create (phone: string) {
    return new Phone(phone)
  }
}