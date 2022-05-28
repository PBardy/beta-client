import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useProducts } from '@hooks/useProducts';
import { Modal, Portal } from 'react-native-paper';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import ProductTile from './ProductTile';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';

type Props = Partial<React.ComponentProps<typeof Modal>>;

const ProductSelector = (props: Props) => {
  const products = useProducts();
  const [showSelf, setShowSelf] = useState<boolean>(true);

  const onConfirm = () => {
    setShowSelf(false);
  };

  return (
    <Portal>
      <Modal visible={showSelf && props.visible!} onDismiss={props.onDismiss}>
        <View style={tw.style('m-5 p-5 bg-white')}>
          <View>
            <XHeading3>Choose products</XHeading3>
          </View>
          <View style={tw.style('my-3')}>
            <ScrollView>
              <View style={tw.style('flex flex-row flex-wrap')}>
                {products.map((product, index) => (
                  <ProductTile key={index} product={product} />
                ))}
              </View>
            </ScrollView>
          </View>
          <View>
            <XButton onPress={onConfirm}>
              <XText>Confirm</XText>
            </XButton>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ProductSelector;
