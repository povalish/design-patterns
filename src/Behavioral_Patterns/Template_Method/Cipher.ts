/* eslint-disable no-useless-constructor,no-empty-function */
export type AlgorithmMode = 'encrypting' | 'decrypting';

export abstract class Cipher {
  constructor() {
  }

  protected abstract transform(sourceMessage: string, mode: AlgorithmMode): string;

  public encrypt(message: string): string {
    return this.transform(message, 'encrypting');
  }

  public decrypt(message: string): string {
    return this.transform(message, 'decrypting');
  }
}
