import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import XHeading2 from '@components/Typography/XHeading2/XHeading2';
import tw from '@config/tailwind.config';
import XHeading4 from '@components/Typography/XHeading4/XHeading4';

type Props = NativeStackHeaderProps & {
  title?: string;
};

const Header = (props: Props) => {
  const nav = useNavigation();

  return (
    <Appbar.Header style={tw.style('bg-white')}>
      <Appbar.BackAction onPress={nav.goBack} />
      <View style={tw.style('flex flex-row items-center flex-1')}>
        <XHeading4 style={tw.style('text-black mb-0 font-normal')}>
          {props.title || props.route.name}
        </XHeading4>
      </View>
    </Appbar.Header>
  );
};

export default Header;
