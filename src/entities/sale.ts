import { BaseEntity } from "./core/base-entity"

export class Sale extends BaseEntity {
  bookId!: string

  customerId!: string

  attendantId!: string
}