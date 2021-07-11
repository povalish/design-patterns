import { Basket } from './Basket';

export const OrderPageComponent = () => {
  const orderBasket = new Basket();

  const onIncreaseProductAmount = (product: string) => {
    orderBasket.increaseProductAmount(product);
  };

  const onSubmitOrder = () => {
    orderBasket.makeOrder();
  };

  return '<section></section>';
};
