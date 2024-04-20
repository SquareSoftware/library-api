import bcrypt from 'bcrypt' 
import { IEncryptor } from './contracts/encryptor'

export class Encryptor implements IEncryptor {
  private readonly SALT = 10

  async encrypt(value: string): Promise<string> {
    return await bcrypt.hash(value, this.SALT)
  }

  async areEqual(encryptedValue: string, value: string): Promise<boolean> {
    return await bcrypt.compare(value, encryptedValue)
  }
}
