import { View, Text, Image, ImageStyle, StyleProp } from 'react-native';
import React from 'react';

type Props = React.ComponentProps<typeof Image>;

const XImage = (props: Props) => {
  return <Image style={props.style} {...props} />;
};

export default XImage;
