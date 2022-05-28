import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { useIsErring } from '@hooks/useIsErring';
import { useAppDispatch } from '@hooks/useAppSelector';
import { cancel } from '@redux/actions/api';
import XParagraph from '@components/XParagraph/XParagraph';
import XText from '@components/Typography/XText/XText';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import { Auth } from '@interfaces/auth.interface';

type Props = {
  credentials: Auth.Req.ISignIn;
};

const SignInError = (props: Props) => {
  const dispatch = useAppDispatch();
  const isErring = useIsErring('auth/sign-in');

  const onRetry = () => {
    //
  };

  const onDismiss = () => {
    dispatch(cancel('auth/sign-in'));
  };

  return (
    <Portal>
      <Dialog visible={isErring} onDismiss={onDismiss}>
        <Dialog.Title>
          <XHeading3>An error occured!</XHeading3>
        </Dialog.Title>
        <Dialog.Content>
          <XParagraph>An error occured whilst attempting to sign in.</XParagraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode='text' uppercase={false} onPress={onDismiss}>
            <XText>Cancel</XText>
          </Button>
          <Button mode='text' uppercase={false} onPress={onRetry}>
            <XText>Retry</XText>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default SignInError;
