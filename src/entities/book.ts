import { Category } from "./category";
import { BaseEntity } from "./core/base-entity";
import { Rating } from "./rating";
import { Rent } from "./rent";
import { Send } from "./send";

export class Book extends BaseEntity {
  pages!: number

  cover!: string

  author!: string

  synopsis!: string

  release!: string

  title!: string

  rating!: Rating

  send!: Send

  rent!: Rent

  category!: Category

  availability!: boolean

  ageIndication!: number
}