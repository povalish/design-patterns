import { Product } from './Product';


export type Status = {
  status: 'ok' | 'error';
  reason?: string;
}

export class ProductValidator {
  public static checkRelevance(products: Product[]): Status {
    return { status: 'ok' };
  }

  public static checkAvailability(products: Product[]): Status {
    return { status: 'ok' };
  }
}
