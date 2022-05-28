import { Text } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof Text>;

const XHeading1 = (props: Props) => {
  return <Text {...props} style={[tw.style('font-sans font-bold mb-2 text-2xl'), props.style]} />;
};

export default XHeading1;
