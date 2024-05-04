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

  category!: Category

  ageIndication!: number

  prices!: Price[]
}