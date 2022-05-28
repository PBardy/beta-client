import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { IModalContext } from '@contexts/modal.context';
import tw from '@config/tailwind.config';
import XHeading4 from '@components/Typography/XHeading4/XHeading4';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useUserProducts } from '@hooks/useUserProducts';
import { List } from 'react-native-paper';

type Props = IModalContext & {
  min?: number;
  max?: number;
};

const ProductSelector = (props: Props) => {
  const { min, max } = props;

  const products = useUserProducts();

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <View style={tw.style('bg-white p-5 m-5 rounded-lg')}>
      <View>
        <XHeading4>Your Products</XHeading4>
      </View>
      <View style={tw.style('my-2')}>
        <List.Section>
          {products.map((product) => (
            <List.Item title={product.name} />
          ))}
        </List.Section>
      </View>
      <View>
        <XButton>
          <XText>Confirm</XText>
        </XButton>
      </View>
    </View>
  );
};

export default ProductSelector;
