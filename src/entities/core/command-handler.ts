export abstract class CommandHandler {
  abstract canHandle <ICommand>(command: ICommand): boolean

  abstract handle <ICommand>(command: ICommand): Promise<void>
}