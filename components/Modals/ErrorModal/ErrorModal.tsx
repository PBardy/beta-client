import { View, Text } from 'react-native';
import React from 'react';
import { IModalContext } from '@contexts/modal.context';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';

type Props = IModalContext & {
  title?: string;
  message?: string;
};

const ErrorModal = (props: Props) => {
  return (
    <View style={tw.style('bg-white m-5 p-5 rounded-lg')}>
      <XHeading3>{props.title ?? 'An error occurred'}</XHeading3>
      <XParagraph>{props.message}</XParagraph>
    </View>
  );
};

export default ErrorModal;
