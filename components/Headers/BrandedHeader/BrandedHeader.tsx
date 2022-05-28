import { View, Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import { IconButton } from 'react-native-paper';

type Props = {};

const BrandedHeader = (props: Props) => {
  return (
    <View style={tw.style('h-15 shadow-lg')}>
      <View style={tw.style('flex flex-row items-center h-full px-2')}>
        <IconButton icon='apple' />
      </View>
    </View>
  );
};

export default BrandedHeader;
