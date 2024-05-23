import mongoose, { Model } from 'mongoose'
import { IRepository } from './contracts/repository';
import { BaseEntity } from '../../entities/core/base-entity';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseRepository<IEntity extends BaseEntity, Document> implements IRepository<IEntity> {
  readonly model!: Model<Document>

  async getById (id: string): Promise<IEntity | null> {
    const data = await this.model.findOne({ id })

    if (!data) return null

    return this.toEntity(data)
  }

  async save (entity: IEntity): Promise<void> {
    await this.model.create(this.toDocument(entity))
  }

  async update (entity: IEntity): Promise<void> {
    await this.model.updateOne({ id: entity.id }, this.toDocument(entity) as any)
  }

  async delete (entity: IEntity): Promise<void> {
    await this.model.deleteOne({ id: entity.id })
  }

  abstract toEntity (document: Document): IEntity

  abstract toDocument (entity: IEntity): Document
}
