import { View, Text } from 'react-native';
import React from 'react';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import BrandedHeader from '@components/Headers/BrandedHeader/BrandedHeader';
import Carousel from '@components/Carousel/Carousel';
import XText from '@components/Typography/XText/XText';
import SocialButtons from '@components/Buttons/SocialButtons/SocialButtons';
import SignUpForm from './SignUpForm';
import XLink from '@components/Typography/XLink/XLink';
import { useGoToSignIn } from '@hooks/useGoToSignIn';

type Props = {};

const SignUpScreen = (props: Props) => {
  const signIn = useGoToSignIn();

  return (
    <Screen>
      <View style={tw.style('w-full h-full')}>
        <BrandedHeader />
        <Carousel />
        <View style={tw.style('p-4')}>
          <View style={tw.style('flex flex-row justify-center py-2')}>
            <XText style={tw.style('font-bold')}>Social registration</XText>
          </View>
          <SocialButtons />
          <View style={tw.style('flex flex-row justify-center py-2')}>
            <XText style={tw.style('font-bold')}>Email registration</XText>
          </View>
          <SignUpForm />
          <View style={tw.style('flex flex-row justify-center py-2')}>
            <XLink url={signIn}>I already have an account</XLink>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default SignUpScreen;
