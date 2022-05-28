import { View } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XText from '@components/Typography/XText/XText';
import XLink from '@components/Typography/XLink/XLink';
import { useIsErring } from '@hooks/useIsErring';

const ProductsError = () => {
  const isErring = useIsErring('products/fetch');

  if (!isErring) {
    return <React.Fragment />;
  }

  const onTryAgain = () => {
    console.log('try again');
  };

  return (
    <View style={tw.style('flex flex-row flex-1 items-center justify-center')}>
      <View style={tw.style('flex flex-col items-center')}>
        <XText style={tw.style('mb-4')}>Products failed to load.</XText>
        <XLink url={onTryAgain}>Try Again?</XLink>
      </View>
    </View>
  );
};

export default ProductsError;
