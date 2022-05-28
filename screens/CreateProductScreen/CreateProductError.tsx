import { View, Text } from 'react-native';
import React from 'react';
import { useIsErring } from '@hooks/useIsErring';
import { Button, Dialog, Portal } from 'react-native-paper';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import { useAppDispatch } from '@hooks/useAppSelector';
import { cancel } from '@redux/actions/api';
import XText from '@components/Typography/XText/XText';
import { IProduct } from '@interfaces/product.interface';
import { createOneProductThunk } from '@redux/thunks/products.thunk';

type Props = {
  product: Partial<IProduct>;
};

const CreateProductError = (props: Props) => {
  const dispatch = useAppDispatch();
  const isErring = useIsErring('products/create-one');

  const onRetry = () => {
    dispatch(createOneProductThunk(props.product));
  };

  const onDismiss = () => {
    dispatch(cancel('products/create-one'));
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

export default CreateProductError;
