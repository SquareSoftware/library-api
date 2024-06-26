import { BaseEntity } from "./core/base-entity"

export class Rent extends BaseEntity {
  bookId!: string

  customerId!: string

  attendantId!: string

  deadline!: Date

  date!: Date
}