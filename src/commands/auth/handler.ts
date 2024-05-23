import { IRequestHandler, requestHandler } from 'mediatr-ts';
import { SignupCommand } from './signup';
import { IUserRepository } from '../../infra/repository/contracts/user';
import { inject } from 'inversify';
import { AuthDeps } from '../../ioc/enums/auth';
import ApplicationError from '../../entities/errors/application-error';
import { User } from '../../entities/user';

@requestHandler(SignupCommand)
export class SignupCommandHandler implements IRequestHandler<SignupCommand, void> {
  private readonly _userRepository: IUserRepository

  constructor (
    @inject(AuthDeps.UserRepository) userRepository: IUserRepository
  ) {
    this._userRepository = userRepository
  }

  async handle (command: SignupCommand): Promise<void> {
    const exists = await this._userRepository.getByEmail(command.payload.email)

    if (exists) throw new ApplicationError('USER_ALREADY_EXISTS', 400)

    const user = await User.signup(command.payload)

    this._userRepository.save(user)
  }
}