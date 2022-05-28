import React from 'react';
import { useAppDispatch } from '@hooks/useAppSelector';
import { useIsErring } from '@hooks/useIsErring';
import { createOneLocationThunk } from '@redux/thunks/locations.thunk';
import { ILocation } from '@interfaces/location.interface';
import { cancel } from '@redux/actions/api';
import { Button, Dialog, Portal } from 'react-native-paper';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XText from '@components/Typography/XText/XText';

type Props = {
  location: Partial<ILocation>;
};

const CreateLocationError = (props: Props) => {
  const dispatch = useAppDispatch();
  const isErring = useIsErring('locations/create-one');

  const onRetry = () => {
    dispatch(createOneLocationThunk(props.location));
  };

  const onDismiss = () => {
    dispatch(cancel('locations/create-one'));
  };

  return (
    <Portal>
      <Dialog visible={isErring} onDismiss={onDismiss}>
        <Dialog.Content>
          <XHeading3>An error occurred</XHeading3>
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

export default CreateLocationError;
