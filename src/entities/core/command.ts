export abstract class Command<IPayload> {
  payload!: IPayload

  constructor (payload: IPayload) {
    this.payload = payload

    this.verify()
  }

  abstract verify (): void 
}
