export class KassaWidget {
  private key: string;

  constructor(kassKey: string) {
    this.key = kassKey;
  }

  public getOrderToken(price: number, id: string) {
    return 'KASSA_TOKEN';
  }
}
