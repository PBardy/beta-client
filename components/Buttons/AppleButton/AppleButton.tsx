import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@hooks/useAppSelector';
import tw from '@config/tailwind.config';
import XImage from '@components/XImage/XImage';
import XText from '@components/Typography/XText/XText';
import { images } from '@config/images.config';

type Props = {};

const AppleButton = (props: Props) => {
  const nav = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <View style={tw.style('w-full')}>
      <TouchableOpacity activeOpacity={1}>
        <View style={tw.style('w-full bg-black rounded-lg my-1')}>
          <View style={tw.style('p-3')}>
            <View style={tw.style('flex flex-row items-center justify-center')}>
              <XImage style={tw.style('w-6 h-6 mr-2')} source={images.images.IMAGE_APPLE_LOGO} />
              <XText style={tw.style('text-lg text-white')}>Apple</XText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppleButton;
