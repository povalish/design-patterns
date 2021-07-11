/* eslint-disable no-useless-constructor,no-empty-function */
import { BasketController } from './BasketController';

export class Basket {
  private controller: BasketController = BasketController.instance;

  constructor() {
    this.controller.resetProducts();
  }

  get products(): string[] {
    return this.controller.getProducts();
  }

  public removeProduct(product: string) {
    this.controller.removeProduct(product);
  }

  public increaseProductAmount(product: string) {
    this.controller.addProduct(product);
  }

  public makeOrder() {
    console.log('Submit order with products');
  }
}
