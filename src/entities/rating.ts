import { BaseEntity } from "./core/base-entity"

export class Rating extends BaseEntity {
  bookId!: string

  userId!: string

  value!: number

  comment!: string

  title!: string
}