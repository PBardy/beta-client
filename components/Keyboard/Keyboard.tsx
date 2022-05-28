import { View } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import KeyboardTile from './KeyboardTile';

type Props = {};

const Keyboard = (props: Props) => {
  return (
    <View style={tw.style('flex flex-row')}>
      <View style={tw.style('flex flex-1 flex-col')}>
        <View style={tw.style('flex flex-row')}>
          <KeyboardTile>1</KeyboardTile>
          <KeyboardTile>2</KeyboardTile>
          <KeyboardTile>3</KeyboardTile>
        </View>
        <View style={tw.style('flex flex-row')}>
          <KeyboardTile>4</KeyboardTile>
          <KeyboardTile>5</KeyboardTile>
          <KeyboardTile>6</KeyboardTile>
        </View>
        <View style={tw.style('flex flex-row')}>
          <KeyboardTile>7</KeyboardTile>
          <KeyboardTile>8</KeyboardTile>
          <KeyboardTile>9</KeyboardTile>
        </View>
        <View style={tw.style('flex flex-row')}>
          <KeyboardTile>CLR</KeyboardTile>
          <KeyboardTile>0</KeyboardTile>
          <KeyboardTile>RTN</KeyboardTile>
        </View>
      </View>
      <View>
        <KeyboardTile>x0.5</KeyboardTile>
        <KeyboardTile>x2</KeyboardTile>
        <KeyboardTile>x0.1</KeyboardTile>
        <KeyboardTile>x10</KeyboardTile>
      </View>
    </View>
  );
};

export default Keyboard;
