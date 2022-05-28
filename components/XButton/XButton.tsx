import tw from '@config/tailwind.config';
import React from 'react';
import { Button } from 'react-native-paper';

type Props = React.ComponentProps<typeof Button>;

const XButton = (props: Props) => {
  return (
    <Button
      mode='contained'
      uppercase={false}
      {...props}
      style={[tw.style('rounded-full'), props.style]}
    />
  );
};

export default XButton;
