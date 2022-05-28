import { View } from 'react-native';
import React, { useState } from 'react';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import XText from '@components/Typography/XText/XText';
import { useRoute } from '@react-navigation/native';
import { ViewProductParams } from '@types';
import { useProduct } from '@hooks/useProducts';
import XParagraph from '@components/XParagraph/XParagraph';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XButton from '@components/XButton/XButton';
import { useGoToUpdateProduct } from '@hooks/useGoToUpdateProduct';
import LocationSelector from '@components/LocationSelector/LocationSelector';
import { useModal } from '@contexts/modal.context';
import DeleteProductModal from '@components/Modals/DeleteProductModal/DeleteProductModal';
import { ILocation } from '@interfaces/location.interface';

const ProductScreen = () => {
  const route = useRoute();
  const modal = useModal();
  const params = route.params as ViewProductParams;
  const product = useProduct(params.id);
  const goToUpdateProduct = useGoToUpdateProduct(params.id);

  const onSetLocations = (locations: Array<ILocation>) => {};

  const openDeleteProduct = () => {
    modal.openModal(<DeleteProductModal {...modal} product={product!} />);
  };

  const openChooseLocation = () => {
    modal.openModal(<LocationSelector {...modal} onConfirm={onSetLocations} />);
  };

  return (
    <Screen>
      <View style={tw.style('flex flex-col')}>
        <View style={tw.style('bg-primary px-4 py-6')}>
          <View style={tw.style('bg-white rounded-lg')}>
            <View style={tw.style('flex flex-row p-4')}>
              <View style={tw.style('flex flex-col flex-1 px-1 py-2')}>
                <XHeading3>{product?.name}</XHeading3>
                <XParagraph>{product?.description}</XParagraph>
              </View>
            </View>
          </View>
        </View>
        <View style={tw.style('p-4 flex flex-col')}>
          <XButton icon='plus' style={tw.style('my-1')} onPress={openChooseLocation}>
            <XText>Add To Locations</XText>
          </XButton>
          <XButton icon='pen' style={tw.style('my-1')} onPress={goToUpdateProduct}>
            <XText>Update Product</XText>
          </XButton>
          <XButton icon='delete' style={tw.style('my-1 bg-red')} onPress={openDeleteProduct}>
            <XText>Delete Product</XText>
          </XButton>
        </View>
      </View>
    </Screen>
  );
};

export default ProductScreen;
