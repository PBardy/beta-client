import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import UserLocationsEmptyScreen from './UserLocationsEmptyScreen';

type Props = {};

const UserLocationsScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={tw.style('bg-gray min-h-full')}>
        <ScrollView>
          <View style={tw.style('bg-primary h-50 w-full')}></View>
          <UserLocationsEmptyScreen />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserLocationsScreen;
