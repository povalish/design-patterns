import { Product } from './legacy-code/Product';
import { Status } from './legacy-code/ProductValidator';

export type PaymentConfig = {
  products: Product[];
  onValidationError: (status: Status) => void;
}
