import { View } from 'react-native';
import React from 'react';
import { ICategory } from '@interfaces/Category.interface';
import { useCategories, useCategory } from '@hooks/useCategories';
import { IModalContext } from '@contexts/modal.context';

type Props = IModalContext & {
  min?: number;
  max?: number;
  onSelect: (categories: Array<ICategory>) => void;
};

const CategorySelector = (props: Props) => {
  const { onSelect } = props;
  const categories = useCategories();

  return <View></View>;
};

export default CategorySelector;
