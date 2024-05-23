import { IRequestHandler, requestHandler } from 'mediatr-ts';
import { SignupCommand } from './signup';

@requestHandler(SignupCommand)
export class SignupCommandHandler implements IRequestHandler<SignupCommand, void> {
  async handle (command: SignupCommand): Promise<void> {
    throw new Error('Method not implemented.');
  }
}