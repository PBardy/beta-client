import { Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof Text>;

const XHeading4 = (props: Props) => {
  return <Text {...props} style={[tw.style('font-sans text-base'), props.style]} />;
};

export default XHeading4;
