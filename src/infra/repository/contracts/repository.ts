export interface IRepository<IEntity> {
  getById (id: string): Promise<IEntity | null>

  save (entity: IEntity): Promise<void>

  update (entity: IEntity): Promise<void>

  delete (entity: IEntity): Promise<void>
}
