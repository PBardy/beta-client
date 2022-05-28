import { Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof Text>;

const XHeading3 = (props: Props) => {
  return <Text {...props} style={[tw.style('font-sans font-bold text-lg'), props.style]} />;
};

export default XHeading3;
