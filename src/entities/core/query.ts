export abstract class Query<IParams, IAggregateId = string> {
  readonly params?: IParams

  readonly aggregateId?: IAggregateId

  constructor (params?: IParams, aggregateId?: IAggregateId) {
    this.params = params
    
    this.aggregateId = aggregateId
  }
}