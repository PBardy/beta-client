import { View } from 'react-native';
import React from 'react';
import { useProducts } from '@hooks/useProducts';
import tw from '@config/tailwind.config';
import XText from '@components/Typography/XText/XText';
import Product from '@components/Product/Product';

type Props = {};

const Products = (props: Props) => {
  const products = useProducts();

  if (products.length === 0) {
    return (
      <View style={tw.style('flex flex-1 flex-row items-center justify-center')}>
        <XText>No products found.</XText>
      </View>
    );
  }

  return (
    <View style={tw.style('flex flex-col')}>
      {products.map((product, index) => (
        <Product key={index} product={product!} />
      ))}
    </View>
  );
};

export default Products;
