import { productsAdapter } from '@redux/slices/products.slice';
import { RootState, store } from '@redux/store';
import { useAppSelector } from './useAppSelector';

export const useProductsSelector = () => useAppSelector((state) => state.products);

export const useProductsAdapterSelector = () => {
  return productsAdapter.getSelectors<RootState>((state) => state.products);
};

export const useProduct = (uuid: string) => {
  const adapter = useProductsAdapterSelector();
  const product = adapter.selectById(store.getState(), uuid);

  return product;
};

export const useProducts = () => {
  const adapter = useProductsAdapterSelector();
  const products = adapter.selectAll(store.getState());

  return products;
};
