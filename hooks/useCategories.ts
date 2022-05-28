import { categoriesAdapter } from '@redux/slices/categories.slice';
import { RootState, store } from '@redux/store';
import { useAppSelector } from './useAppSelector';

export const useCategoriesSelector = () => useAppSelector((state) => state.categories);

export const useCategoriesAdapterSelector = () => {
  return categoriesAdapter.getSelectors<RootState>((state) => state.categories);
};

export const useCategory = (uuid: string) => {
  const adapter = useCategoriesAdapterSelector();
  const category = adapter.selectById(store.getState(), uuid);

  return category;
};

export const useCategories = () => {
  const adapter = useCategoriesAdapterSelector();
  const categories = adapter.selectAll(store.getState());
  const filtered = categories.filter((c) => c);

  return filtered;
};
