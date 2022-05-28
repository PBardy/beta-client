import { View, Text } from 'react-native';
import React from 'react';
import { ICategory } from '@interfaces/category.interface';

type Props = React.ComponentProps<typeof View> & {
  category: ICategory;
};

const Category = (props: Props) => {
  return (
    <View {...props}>
      <Text>Category</Text>
    </View>
  );
};

export default Category;
