import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XText from '@components/Typography/XText/XText';
import XParagraph from '@components/XParagraph/XParagraph';
import type { ILocation } from '@interfaces/location.interface';
import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

type Props = Partial<React.ComponentProps<typeof Dialog>> & {
  location: ILocation;
};

const DeleteLocation = (props: Props) => {
  if (props.location == null) {
    return <React.Fragment />;
  }

  const onConfirm = () => {};

  return (
    <Portal>
      <Dialog visible={props.visible!} onDismiss={props.onDismiss}>
        <Dialog.Content>
          <XHeading3>Are you sure you want to delete '{props.location.name}'?</XHeading3>
          <XParagraph>This action cannot be reversed.</XParagraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button mode='text' uppercase={false} onPress={props.onDismiss}>
            <XText>Cancel</XText>
          </Button>
          <Button mode='text' uppercase={false} onPress={onConfirm}>
            <XText>Confirm</XText>
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DeleteLocation;
