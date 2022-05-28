import { View, Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import { useAppSelector } from '@hooks/useAppSelector';

type Props = {};

const SettingsHero = (props: Props) => {
  const user = useAppSelector((s) => s.user.user);

  return (
    <View style={tw.style('bg-primary h-50')}>
      <View style={tw.style('flex h-full items-center justify-center')}>
        <XHeading3 style={tw.style('text-white font-normal')}>{user?.email}</XHeading3>
      </View>
    </View>
  );
};

export default SettingsHero;
