import { Email } from "../../../src/entities/email"
import { InvalidEmail } from "../../../src/entities/errors/invalid-email"

it('should throw invalid email error', () => {
  expect(() => { new Email('someinvalidemail') }).toThrow(new InvalidEmail())
})

it('should not throw invalid email error', () => {
  const value = 'somevalidemail@mail.com'

  const email = new Email(value)

  expect(email.value).toEqual(value)
})