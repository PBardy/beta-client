import * as Facebook from 'expo-auth-session/providers/facebook';
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XImage from '@components/XImage/XImage';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@hooks/useAppSelector';
import { fauth } from '@config/auth.config';
import XText from '@components/Typography/XText/XText';
import { images } from '@config/images.config';

type Props = {};

const FacebookButton = (props: Props) => {
  const nav = useNavigation();
  const dispatch = useAppDispatch();
  const [req, res, prompt] = Facebook.useAuthRequest(fauth);

  return (
    <View style={tw.style('w-full')}>
      <TouchableOpacity activeOpacity={1} onPress={() => prompt()}>
        <View style={tw.style('w-full bg-blue rounded-lg my-1')}>
          <View style={tw.style('p-3')}>
            <View style={tw.style('flex flex-row items-center justify-center')}>
              <XImage style={tw.style('w-6 h-6 mr-2')} source={images.images.IMAGE_FACEBOOK_LOGO} />
              <XText style={tw.style('text-lg text-white')}>Facebook</XText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FacebookButton;
