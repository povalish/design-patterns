import { Payment } from './Payment';
import { Product } from './legacy-code/Product';

export function main() {
  const products: Product[] = [
    { id: 1, name: 'Роллы', price: 100 },
    { id: 2, name: 'Пицца', price: 125 },
    { id: 3, name: 'Газировочка без сахара', price: 30 },
  ];

  const payment = new Payment({
    products,
    onValidationError: () => undefined,
  });

  payment.submitPayment();
}
