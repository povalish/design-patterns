import { Product } from './Product';

export class PriceService {
  private discount: string;

  constructor(discountCode: string) {
    this.discount = discountCode;
  }

  public checkAndUpdatePrices(products: Product[]): Product[] {
    return products.map((product) => product);
  }

  public calculateFinalPrice(products: Product[]): number {
    return products
      .map((product) => product.price)
      .reduce((sum, price) => sum + price);
  }
}
