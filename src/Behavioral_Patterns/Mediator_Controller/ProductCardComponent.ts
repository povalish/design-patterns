import { BasketController } from './BasketController';

export const ProductCardComponent = () => {
  const onAddProduct = () => {
    BasketController.instance.addProduct('Pizza.');
  };

  return '<div></div>';
};
