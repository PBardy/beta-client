import { ScrollView, View } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuickLinks from './QuickLinks';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw.style('relative bg-gray h-full min-h-full')}>
        <View style={tw.style('bg-primary h-50 w-full')}></View>
        <View style={tw.style('absolute top-5 left-5 right-5 py-2 rounded-lg bg-white shadow')}>
          <ScrollView>
            <QuickLinks />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
