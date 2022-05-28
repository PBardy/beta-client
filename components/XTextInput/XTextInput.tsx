import tw from '@config/tailwind.config';
import React from 'react';
import { TextInput } from 'react-native-paper';

type Props = React.ComponentProps<typeof TextInput>;

const XTextInput = (props: Props) => {
  return <TextInput {...props} mode='outlined' style={[tw.style('bg-white'), props.style]} />;
};

export default XTextInput;
