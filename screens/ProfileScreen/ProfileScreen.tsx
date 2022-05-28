import { View, Text } from 'react-native';
import React from 'react';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useAppDispatch } from '@hooks/useAppSelector';
import { signOutAction } from '@redux/actions/auth';

type Props = {};

const ProfileScreen = (props: Props) => {
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(signOutAction());
  };

  return (
    <Screen>
      <View style={tw.style('p-5')}>
        <View></View>
        <XButton style={tw.style('bg-error')} icon='logout' onPress={onLogOut}>
          <XText>Log Out</XText>
        </XButton>
      </View>
    </Screen>
  );
};

export default ProfileScreen;
