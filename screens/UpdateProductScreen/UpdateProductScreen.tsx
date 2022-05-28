import * as Yup from 'yup';
import React from 'react';
import Screen from '@components/Screen/Screen';
import tw from '@config/tailwind.config';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { UpdateProductParams } from '@types';
import { useProduct } from '@hooks/useProducts';
import { useFormik } from 'formik';
import { Button, IconButton } from 'react-native-paper';
import { useGoToHome } from '@hooks/useGoToHome';
import XText from '@components/Typography/XText/XText';
import XButton from '@components/XButton/XButton';
import { useIsFetching } from '@hooks/useIsFetching';
import { useAppDispatch } from '@hooks/useAppSelector';
import { updateOneProductThunk } from '@redux/thunks/products.thunk';

type Form = {
  name: string;
  thumbnail?: string;
  description?: string;
};

const initialValues: Form = {
  name: '',
  thumbnail: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  thumbnail: Yup.string(),
  description: Yup.string(),
});

const UpdateProductScreen = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const params = route.params as UpdateProductParams;
  const product = useProduct(params.id);
  const goToHome = useGoToHome();
  const isFetching = useIsFetching('products/update-one');

  const onSubmit = (values: Form) => {
    if (!product) return;
    if (!form.isValid) return;
    dispatch(updateOneProductThunk({ uuid: product.uuid, ...values }));
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <Screen>
      <View style={tw.style('flex flex-col p-4')}>
        <View>
          <View style={tw.style('flex flex-row h-full')}>
            <View style={tw.style('h-full mr-2 bg-white')}>
              <View style={tw.style('w-30 h-full bg-black rounded-l-lg relative')}>
                <TouchableOpacity activeOpacity={1} style={tw.style('flex-1')}>
                  <View style={tw.style('flex-1 flex flex-row items-center justify-center')}>
                    <IconButton icon='image' color={tw.color('white')} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw.style('flex flex-col flex-1')}>
              <TextInput
                placeholder='Name'
                value={form.values.name}
                style={tw.style('font-sans text-sm px-2 py-2 bg-white mb-2 rounded-tr-lg')}
                onChangeText={form.handleChange('name')}
              />
              <TextInput
                multiline={true}
                numberOfLines={3}
                placeholder='Description'
                value={form.values.description}
                style={tw.style('font-sans text-sm px-2 py-2 bg-white flex-1 rounded-br-lg')}
                onChangeText={form.handleChange('description')}
              />
            </View>
          </View>
        </View>
        {/** Extra information */}
        <View style={tw.style('bg-white rounded-lg my-2')}>
          <Button uppercase={false} icon='plus'>
            <XText>Add categories</XText>
          </Button>
        </View>
        {/** Submit button */}
        <View>
          <XButton loading={isFetching} onPress={form.handleSubmit}>
            <XText>Update product</XText>
          </XButton>
        </View>
      </View>
    </Screen>
  );
};

export default UpdateProductScreen;
