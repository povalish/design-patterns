import { Product } from './Product';
import { ProductValidator } from './ProductValidator';
import { PriceService } from './PriceService';
import { KassaWidget } from './KassaWidget';
import { PaymentService } from './PaymentService';

export function main() {
  // Будем думать, что это товары в корзине
  // которые пользователь выбрал
  const products: Product[] = [
    { id: 1, name: 'Роллы', price: 100 },
    { id: 2, name: 'Пицца', price: 125 },
    { id: 3, name: 'Газировочка без сахара', price: 30 },
  ];

  // Нужно проверить товары на актуальность, доступность по
  // выбранному адресу и тд
  const relevance = ProductValidator.checkRelevance(products);
  if (relevance.status !== 'ok') { throw new Error(relevance.reason); }

  const availability = ProductValidator.checkAvailability(products);
  if (availability.status !== 'ok') { throw new Error(availability.reason); }

  // Необходимо вычеслить финальную стоимость карзины
  // на стоимость могут повлиять скидки или цена может измениться
  const PriceCalculator = new PriceService('DISCOUNT');
  const updatedProducts = PriceCalculator.checkAndUpdatePrices(products);
  const finalPrice = PriceCalculator.calculateFinalPrice(updatedProducts);

  // Отправить запрос в WeKassa чтобы получить токен заказа
  const Kassa = new KassaWidget('KASSA_KEY');
  const orderID = Kassa.getOrderToken(finalPrice, '123');

  // Отправить запрос на бэк с id заказа
  PaymentService.submitPayment(orderID);
}
