import { BaseEntity } from "./core/base-entity"

export class Rent extends BaseEntity {
  price!: number

  book!: string

  customer!: string

  attendant!: string

  delivery!: Date
}