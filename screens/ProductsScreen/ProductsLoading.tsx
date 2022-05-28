import { View, Text } from 'react-native';
import React from 'react';
import { useIsFetching } from '@hooks/useIsFetching';
import tw from '@config/tailwind.config';
import { ActivityIndicator } from 'react-native-paper';

const ProductsLoading = () => {
  const isFetching = useIsFetching('products/fetch');

  if (!isFetching) {
    return <React.Fragment />;
  }

  return (
    <View style={tw.style('flex flex-row flex-1 items-center justify-center')}>
      <View style={tw.style('py-10')}>
        <ActivityIndicator size='large' />
      </View>
    </View>
  );
};

export default ProductsLoading;
