import { Category } from "./category";
import { BaseEntity } from "./core/base-entity";
import { Price } from "./price";

export class Book extends BaseEntity {
  pages!: number

  cover!: string

  author!: string

  synopsis!: string

  release!: Date

  title!: string

  rating!: string

  send!: string

  rent!: string

  category!: Category

  availability!: boolean

  ageIndication!: number

  prices!: Price[]
}