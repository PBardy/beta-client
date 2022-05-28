import { View, Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof Text>;

const XParagraph = (props: Props) => {
  return <Text {...props} style={[tw.style('text-base'), props.style]} />;
};

export default XParagraph;
