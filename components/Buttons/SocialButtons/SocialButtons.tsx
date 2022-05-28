import { View } from 'react-native';
import React from 'react';
import GoogleButton from '@components/Buttons/GoogleButton/GoogleButton';
import AppleButton from '@components/Buttons/AppleButton/AppleButton';
import FacebookButton from '@components/Buttons/FacebookButton/FacebookButton';
import tw from '@config/tailwind.config';

type Props = {};

const SocialButtons = (props: Props) => {
  return (
    <View style={tw.style('flex flex-col items-center py-2')}>
      <GoogleButton />
      <AppleButton />
      <FacebookButton />
    </View>
  );
};

export default SocialButtons;
