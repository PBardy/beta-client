import { View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import UserProductsEmptyScreen from './UserProductsEmptyScreen';

type Props = {};

const UserProductsScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={tw.style('bg-gray flex-1 min-h-full relative')}>
        <View style={tw.style('bg-primary h-50 w-full')}></View>
        <UserProductsEmptyScreen />
      </View>
    </SafeAreaView>
  );
};

export default UserProductsScreen;
