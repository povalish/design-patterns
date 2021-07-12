import { AlgorithmMode, Cipher } from './Cipher';

export class ROT13Cipher extends Cipher {
  private shift: number = 5;
  private encodeStr: string = '';
  private decodeStr: string = '';

  constructor() {
    super();

    // Generating alphabet for encode/decode strings
    this.encodeStr = '';
    this.decodeStr = '';
  }

  protected transform(sourceMessage: string, mode: AlgorithmMode): string {
    return `Transformed message in mode ${mode}`;
  }
}
