import { View, Text } from 'react-native';
import React from 'react';
import { IProduct } from '@interfaces/product.interface';
import { Card, IconButton } from 'react-native-paper';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';
import tw from '@config/tailwind.config';
import { useGoToProduct } from '@hooks/useGoToProduct';

type Props = {
  product: IProduct;
};

const Product = (props: Props) => {
  const goToProduct = useGoToProduct(props.product.uuid);

  return (
    <Card style={tw.style('rounded-lg my-1')} onPress={goToProduct}>
      <Card.Content>
        <View style={tw.style('flex flex-row items-center')}>
          <View style={tw.style('flex-1')}>
            <XHeading3>{props.product.name}</XHeading3>
          </View>
          <View style={tw.style('flex flex-row items-center')}>
            <IconButton icon='chevron-right' />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default Product;
