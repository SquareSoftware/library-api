import { v4 } from 'uuid'

export class BaseEntity {
  id: string = v4()
}