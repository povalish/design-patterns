/* eslint-disable no-useless-constructor,no-empty-function */

export class BasketController {
  public static instance = new BasketController();
  private products: string[] = [];

  private constructor() {
  }

  public resetProducts() {
    this.products = [];
  }

  public getProducts(): string[] {
    return this.products;
  }

  public addProduct(product: string) {
    this.products.push(product);
  }

  public removeProduct(product: string) {
    this.products = this.products.filter((p) => p !== product);
  }
}
