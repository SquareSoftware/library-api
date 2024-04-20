import ApplicationError from './application-error'

export class InvalidPhone extends ApplicationError {
  constructor(
    readonly message: string = 'Invalid Phone',
    readonly code: number = 400
  ) {
    super(message, code);
  }
}