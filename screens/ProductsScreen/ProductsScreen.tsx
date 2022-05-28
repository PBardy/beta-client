import { View, ScrollView } from 'react-native';
import React from 'react';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import SearchInput from '@components/SearchInput/SearchInput';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useGoToCreateProduct } from '@hooks/useGoToCreateProduct';
import ProductsError from './ProductsError';
import ProductsLoading from './ProductsLoading';
import Products from '@components/Products/Products';

const ProductsScreen = () => {
  const goToCreateProduct = useGoToCreateProduct();

  return (
    <Screen>
      <View style={tw.style('flex flex-col flex-1 p-4')}>
        <View style={tw.style('flex flex-1')}>
          <SearchInput />
          <View style={tw.style('flex flex-1 mt-2 mb-4 max-h-148')}>
            <ScrollView>
              <Products />
              <ProductsError />
              <ProductsLoading />
            </ScrollView>
          </View>
        </View>
        <View>
          <XButton icon='plus' onPress={goToCreateProduct}>
            <XText>Create product</XText>
          </XButton>
        </View>
      </View>
    </Screen>
  );
};

export default ProductsScreen;
