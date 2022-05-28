import * as Google from 'expo-auth-session/providers/google';
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAppDispatch } from '@hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { gauth } from '@config/auth.config';
import tw from '@config/tailwind.config';
import XImage from '@components/XImage/XImage';
import XText from '@components/Typography/XText/XText';
import { images } from '@config/images.config';

const GoogleButton = () => {
  const nav = useNavigation();
  const dispatch = useAppDispatch();
  const [req, res, prompt] = Google.useAuthRequest(gauth);

  return (
    <View style={tw.style('w-full')}>
      <TouchableOpacity activeOpacity={1} onPress={() => prompt()}>
        <View style={tw.style('w-full bg-white rounded-lg my-1')}>
          <View style={tw.style('p-3')}>
            <View style={tw.style('flex flex-row items-center justify-center')}>
              <XImage source={images.images.IMAGE_GOOGLE_LOGO} style={tw.style('w-6 h-6 mr-2')} />
              <XText style={tw.style('text-lg')}>Google</XText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleButton;
