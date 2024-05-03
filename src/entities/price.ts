import { BaseEntity } from "./core/base-entity"

export type PriceType = 'Rent' | 'Sale'

export class Price extends BaseEntity {
  type!: PriceType

  value!: string

  createAt!: Date
}