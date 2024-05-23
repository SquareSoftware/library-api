export abstract class Command<IPayload> {
  payload!: IPayload

  public constructor (payload: IPayload) {
    this.payload = payload

    this.verify()
  }

  abstract verify (): void 
}
