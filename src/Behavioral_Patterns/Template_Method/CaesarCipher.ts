import { AlgorithmMode, Cipher } from './Cipher';

export class CaesarCipher extends Cipher {
  private shift: number;
  private encodeStr: string = '';
  private decodeStr: string = '';

  constructor(shift: number) {
    super();

    this.shift = shift;

    // Generating alphabet for encode/decode strings
    this.encodeStr = '';
    this.decodeStr = '';
  }

  protected transform(sourceMessage: string, mode: AlgorithmMode): string {
    return `Transformed message in mode ${mode}`;
  }
}
