import { View, Text } from 'react-native';
import React from 'react';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof XButton>;

const KeyboardTile = (props: Props) => {
  return (
    <XButton style={tw.style('rounded-0 w-15 h-15 m-1 flex flex-row items-center justify-center')}>
      <XText>{props.children}</XText>
    </XButton>
  );
};

export default KeyboardTile;
