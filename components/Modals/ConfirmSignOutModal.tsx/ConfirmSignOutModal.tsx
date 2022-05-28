import { View } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XParagraph from '@components/XParagraph/XParagraph';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { IModalContext } from '@contexts/modal.context';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import { useAppDispatch } from '@hooks/useAppSelector';
import { signOutAction } from '@redux/actions/auth';

type Props = IModalContext & {};

const ConfirmSignOutModal = (props: Props) => {
  const { closeModal } = props;
  const dispatch = useAppDispatch();

  const onConfirm = () => {
    closeModal();
    dispatch(signOutAction());
  };

  return (
    <View style={tw.style('bg-white m-5 p-5')}>
      <View>
        <XHeading3 style={tw.style('font-bold')}>Confirm sign out</XHeading3>
      </View>
      <View style={tw.style('my-2')}>
        <XParagraph>
          You can easily sign back in again at a later date. If you've signed in through one of the
          supported social providers sign in should be automatic.
        </XParagraph>
      </View>
      <View style={tw.style('py-0 -mb-2')}>
        <View style={tw.style('flex flex-row justify-end')}>
          <XButton mode='text' uppercase={true} onPress={closeModal}>
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

export default ConfirmSignOutModal;
