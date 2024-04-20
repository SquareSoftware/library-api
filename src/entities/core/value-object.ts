export abstract class ValueObject<T> {
  value!: T

  protected abstract validate (value: T): void

  constructor (value: T) {
    this.validate(value)

    this.value = value
  }
}