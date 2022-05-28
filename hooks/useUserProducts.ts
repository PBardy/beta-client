import { userProductsAdapter } from '@redux/slices/user-products.slice';
import { RootState, store } from '@redux/store';
import { useAppSelector } from './useAppSelector';

export const useUserProductsSelector = () => useAppSelector((state) => state.userProducts);

export const useUserProductsAdapterSelector = () => {
  return userProductsAdapter.getSelectors<RootState>((state) => state.userProducts);
};

export const useUserProduct = (uuid: string) => {
  const adapter = useUserProductsAdapterSelector();
  const userProduct = adapter.selectById(store.getState(), uuid);

  return userProduct;
};

export const useUserProducts = () => {
  const adapter = useUserProductsAdapterSelector();
  const userProduct = adapter.selectAll(store.getState());

  return userProduct;
};
