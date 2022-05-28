import { View, Text } from 'react-native';
import React from 'react';
import type { IProduct } from '@interfaces/product.interface';

type Props = {
  product: IProduct;
};

const ProductTile = (props: Props) => {
  return (
    <View>
      <Text>ProductTile</Text>
    </View>
  );
};

export default ProductTile;
