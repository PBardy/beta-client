import { View, Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';
import XImage from '@components/XImage/XImage';
import { images } from '@config/images.config';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useGoToCreateUserProduct } from '@hooks/useGoToCreateUserProduct';

type Props = {};

const UserProductsEmptyScreen = (props: Props) => {
  const goToCreateUserProduct = useGoToCreateUserProduct();

  return (
    <View style={tw.style('absolute top-5 left-5 right-5')}>
      <View style={tw.style('bg-white rounded-lg p-5')}>
        <View style={tw.style('flex flex-row items-center justify-center')}>
          <XImage style={tw.style('w-50 h-50')} source={images.images.IMAGE_EMPTY_FOLDER} />
        </View>
        <View style={tw.style('my-4')}>
          <XHeading3 style={tw.style('uppercase text-center')}>No Products</XHeading3>
          <XParagraph style={tw.style('text-center')}>
            Add an item below and it will appear here.
          </XParagraph>
        </View>
        <View style={tw.style('mt-2')}>
          <XButton icon='plus' onPress={goToCreateUserProduct}>
            <XText>Add product</XText>
          </XButton>
        </View>
      </View>
    </View>
  );
};

export default UserProductsEmptyScreen;
