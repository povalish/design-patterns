import { PaymentConfig } from './PaymentConfig';
import { ProductValidator, Status } from './legacy-code/ProductValidator';
import { PriceService } from './legacy-code/PriceService';
import { KassaWidget } from './legacy-code/KassaWidget';
import { PaymentService } from './legacy-code/PaymentService';

export class Payment {
  private config: PaymentConfig;
  private priceService: PriceService = new PriceService('DISCOUNT');
  private kassa: KassaWidget = new KassaWidget('KASSA_KEY');

  constructor(config: PaymentConfig) {
    this.config = config;
  }

  public submitPayment(): void {
    const validationStatus = this.validateProductsAndGetStatus();
    if (validationStatus.status !== 'ok') {
      this.config.onValidationError(validationStatus);
    }

    const price = this.calculatePrice();
    const orderID = this.kassa.getOrderToken(price, '123');
    PaymentService.submitPayment(orderID);
  }

  private validateProductsAndGetStatus(): Status {
    const relevance = ProductValidator.checkRelevance(this.config.products);
    if (relevance.status !== 'ok') { return relevance; }

    const availability = ProductValidator.checkAvailability(this.config.products);
    if (availability.status !== 'ok') { return availability; }

    return { status: 'ok' };
  }

  private calculatePrice(): number {
    const updatedProducts = this.priceService.checkAndUpdatePrices(this.config.products);
    return this.priceService.calculateFinalPrice(updatedProducts);
  }
}
