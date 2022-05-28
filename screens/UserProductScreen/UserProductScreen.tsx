import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '@config/tailwind.config';

type Props = {};

const UserProductScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={tw.style('bg-gray min-h-full')}>
        <ScrollView>
          <KeyboardAvoidingView>
            <View style={tw.style('bg-primary h-50 w-full')}></View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserProductScreen;
