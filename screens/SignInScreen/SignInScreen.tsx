import { View } from 'react-native';
import React from 'react';
import Screen from '@components/Screen/Screen';
import BrandedHeader from '@components/Headers/BrandedHeader/BrandedHeader';
import Carousel from '@components/Carousel/Carousel';
import SocialButtons from '@components/Buttons/SocialButtons/SocialButtons';
import SignInForm from './SignInForm';
import tw from '@config/tailwind.config';
import XLink from '@components/Typography/XLink/XLink';
import XText from '@components/Typography/XText/XText';
import { useGoToSignUp } from '@hooks/useGoToSignUp';

type Props = {};

const SignInScreen = (props: Props) => {
  const signUp = useGoToSignUp();

  return (
    <Screen>
      <View style={tw.style('w-full h-full')}>
        <BrandedHeader />
        <Carousel />
        <View style={tw.style('p-4')}>
          <View style={tw.style('flex flex-row justify-center py-2')}>
            <XText style={tw.style('font-bold')}>Social login</XText>
          </View>
          <SocialButtons />
          <View style={tw.style('flex flex-row justify-center py-2')}>
            <XText style={tw.style('font-bold')}>Email login</XText>
          </View>
          <SignInForm />
          <View style={tw.style('flex flex-row justify-center py-2')}>
            <XLink url={signUp}>I don't have an account</XLink>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default SignInScreen;
