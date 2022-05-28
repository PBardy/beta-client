import { Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof Text>;

const XText = (props: Props) => {
  return <Text {...props} style={[tw.style('font-sans leading-5'), props.style]} />;
};

export default XText;
