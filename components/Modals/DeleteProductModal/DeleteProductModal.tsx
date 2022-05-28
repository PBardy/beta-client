import React from 'react';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import XParagraph from '@components/XParagraph/XParagraph';
import XText from '@components/Typography/XText/XText';
import { IProduct } from '@interfaces/product.interface';
import { useAppDispatch } from '@hooks/useAppSelector';
import { deleteOneProductThunk } from '@redux/thunks/products.thunk';
import { View } from 'react-native';
import { IModalContext } from '@contexts/modal.context';
import XButton from '@components/XButton/XButton';
import tw from '@config/tailwind.config';

type Props = IModalContext & {
  product: IProduct;
};

const DeleteProductModal = (props: Props) => {
  const { closeModal } = props;

  const dispatch = useAppDispatch();

  const onConfirm = () => {
    closeModal();
    dispatch(deleteOneProductThunk(props.product));
  };

  return (
    <View style={tw.style('bg-white p-5 m-5')}>
      <View>
        <XHeading3>Are you sure you want to delete '{props.product?.name}'?</XHeading3>
      </View>
      <View style={tw.style('my-2')}>
        <XParagraph>This action cannot be reversed.</XParagraph>
      </View>
      <View style={tw.style('py-0 -mb-2')}>
        <View style={tw.style('flex flex-row justify-end')}>
          <XButton mode='text' uppercase={true} onPress={closeModal}>
            <XText style={tw.style('font-bold text-xs')}>Cancel</XText>
          </XButton>
          <XButton mode='text' uppercase={true} onPress={onConfirm}>
            <XText style={tw.style('font-bold text-xs')}>Confirm</XText>
          </XButton>
        </View>
      </View>
    </View>
  );
};

export default DeleteProductModal;
