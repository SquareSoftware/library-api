import { BaseEntity } from "./core/base-entity"

export class Send extends BaseEntity {
  price!: number

  book!: string

  customer!: string

  attendant!: string

  date!: Date
}