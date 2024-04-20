export interface IEncryptor {
  encrypt (value: string): Promise<string>

  areEqual (encryptedValue: string, value: string): Promise<boolean>
}