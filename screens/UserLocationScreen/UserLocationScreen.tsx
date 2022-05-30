import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import tw from '@config/tailwind.config';
import UserLocationsEmptyScreen from './UserLocationEmptyScreen';

type Props = {};

const UserLocationScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={tw.style('bg-gray min-h-full relative')}>
        <ScrollView>
          <View style={tw.style('bg-primary h-50 w-full')}></View>
          <UserLocationsEmptyScreen />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserLocationScreen;
