import tw from '@config/tailwind.config';
import { StyleSheet } from 'react-native';

export const settingStyles = StyleSheet.create({
  h4: tw.style('p-0 m-0'),
  hbox: tw.style('flex flex-row items-center flex-1'),
  setting: tw.style('flex flex-row items-center'),
  group: tw.style('bg-white rounded-lg py-2 px-4 shadow mb-3'),
});
