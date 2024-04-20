import ApplicationError from './application-error'

export class InvalidEmail extends ApplicationError {
  constructor(
    readonly message: string = 'Invalid Email',
    readonly code: number = 400
  ) {
    super(message, code);
  }
}