import { inject, injectable } from 'inversify'
import { Query } from '../../entities/core/query'
import { Command } from '../../entities/core/command'
import { AuthDeps } from '../../ioc/enums/auth'
import { AuthCommandHandler } from '../../commands/auth/handler'

@injectable()
export class Mediator {
  private readonly authCommandHandler!: AuthCommandHandler

  constructor (
    @inject(AuthDeps.AuthCommandHandler) authCommandHandler: AuthCommandHandler
  ) {
    this.authCommandHandler = authCommandHandler
  }

  async sendCommand <ICommand>(command: ICommand) {
    if (this.authCommandHandler.canHandle<ICommand>(command)) {
      return await this.authCommandHandler.handle<ICommand>(command)
    }

    throw new Error('No handler command handler found for this command')
  }
}