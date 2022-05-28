import { View } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XParagraph from '@components/XParagraph/XParagraph';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { IModalContext } from '@contexts/modal.context';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';

type Props = IModalContext & {};

const ConfirmDeleteAccountModal = (props: Props) => {
  const onConfirm = () => {};
  return (
    <View style={tw.style('bg-white m-5 p-5')}>
      <View>
        <XHeading3 style={tw.style('font-bold')}>
          Are you sure you want to delete your account?
        </XHeading3>
      </View>
      <View style={tw.style('my-2')}>
        <XParagraph>
          This action cannot be reversed and all your account information will be lost (for like a
          realy long time).
        </XParagraph>
      </View>
      <View style={tw.style('py-0 -mb-2')}>
        <View style={tw.style('flex flex-row justify-end')}>
          <XButton mode='text' uppercase={true} onPress={props.closeModal}>
            <XText style={tw.style('font-bold text-xs')}>Cancel</XText>
          </XButton>
          <XButton mode='text' uppercase={true} onPress={onConfirm}>
            <XText style={tw.style('font-bold text-xs')}>Sign Out</XText>
          </XButton>
        </View>
      </View>
    </View>
  );
};

export default ConfirmDeleteAccountModal;
