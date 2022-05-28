import { View, Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XText from '../XText/XText';

type Props = React.ComponentProps<typeof XText>;

const XLabel = (props: Props) => {
  return (
    <XText {...props} style={tw.style('font-sans font-bold')}>
      {props.children}
    </XText>
  );
};

export default XLabel;
