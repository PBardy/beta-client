import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = {};

const AlertScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={tw.style('bg-gray min-h-full')}>
        <ScrollView>
          <View style={tw.style('bg-primary w-full h-50')}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AlertScreen;
