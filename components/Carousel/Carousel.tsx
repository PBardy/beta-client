import { View } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import { IconButton } from 'react-native-paper';

type Props = {};

const Carousel = (props: Props) => {
  const onLeft = () => {};

  const onRight = () => {};

  return (
    <View style={tw.style('h-50 shadow-lg')}>
      <View style={tw.style('p-2 h-full')}>
        <View style={tw.style('flex flex-row h-full')}>
          <View style={tw.style('flex flex-row items-center')}>
            <IconButton
              size={32}
              icon='chevron-left'
              onPress={onLeft}
              color={tw.color('primary')}
            />
          </View>
          <View style={tw.style('flex-1')}></View>
          <View style={tw.style('flex flex-row items-center h-full')}>
            <IconButton
              size={32}
              icon='chevron-right'
              onPress={onRight}
              color={tw.color('primary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Carousel;
