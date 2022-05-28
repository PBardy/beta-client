import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';
import XText from '@components/Typography/XText/XText';
import { IProduct } from '@interfaces/product.interface';
import { useAppDispatch } from '@hooks/useAppSelector';
import { deleteOneProductThunk } from '@redux/thunks/products.thunk';

type Props = Partial<React.ComponentProps<typeof Dialog>> & {
  product: IProduct;
};

const DeleteProduct = (props: Props) => {
  const dispatch = useAppDispatch();

  const onConfirm = () => {
    dispatch(deleteOneProductThunk(props.product));
  };

  return (
    <Portal>
      <Dialog visible={props.visible!} onDismiss={props.onDismiss}>
        <Dialog.Content>
          <XHeading3>Are you sure you want to delete '{props.product?.name}'?</XHeading3>
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

export default DeleteProduct;
