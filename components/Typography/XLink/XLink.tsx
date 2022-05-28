import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';

type Props = React.ComponentProps<typeof Text> & {
  url: () => void;
};

const XLink = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.url}>
      <Text {...props} style={tw.style('font-sans text-link')} />
    </TouchableOpacity>
  );
};

export default XLink;
