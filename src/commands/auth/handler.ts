import { CommandHandler } from '../../entities/core/command-handler';
import { SignupCommand } from './signup';

export class AuthCommandHandler implements CommandHandler {
  canHandle <ICommand> (command: ICommand): boolean {
    if (command !instanceof SignupCommand) {
      return false
    }

    return true
  }

  async handle <ICommand>(command: ICommand): Promise<void> {
    if (command instanceof SignupCommand) {
      return this.handleSignup(command)
    }

    return
  }

  async handleSignup (command: SignupCommand): Promise<void> {
    // buscario no banco pra ver se tem um usuário com aquele email

    //criar usuário
  }
}