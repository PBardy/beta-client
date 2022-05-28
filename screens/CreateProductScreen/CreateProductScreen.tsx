import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { IconButton } from 'react-native-paper';
import { useFormik } from 'formik';
import { useAppDispatch } from '@hooks/useAppSelector';
import { createOneProductThunk } from '@redux/thunks/products.thunk';
import { useIsFetching } from '@hooks/useIsFetching';
import CreateProductError from './CreateProductError';
import { SafeAreaView } from 'react-native-safe-area-context';

type Form = {
  name: string;
  thumbnail: string;
  description: string;
};

const initialValues: Form = {
  name: '',
  thumbnail: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  thumbnail: Yup.string(),
  description: Yup.string(),
});

const CreateProductScreen = () => {
  const isFetching = useIsFetching('products/create-one');
  const dispatch = useAppDispatch();

  const onSubmit = (values: Form) => {
    if (form.isValid) {
      dispatch(createOneProductThunk(values));
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      form.setFieldValue('thumbnail', result.uri);
    }
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <SafeAreaView>
      <View style={tw.style('flex flex-col flex-1 p-4 bg-primary')}>
        <View style={tw.style('mb-2 bg-primary')}>
          <View style={tw.style('flex flex-row h-full bg-primary')}>
            <View style={tw.style('h-full mr-2 bg-white')}>
              <View style={styles.imageContainer}>
                <TouchableOpacity activeOpacity={1} style={styles.imageTouch} onPress={pickImage}>
                  <View style={styles.imagePicker}>
                    <IconButton icon='image' color={tw.color('white')} onPress={pickImage} />
                  </View>
                  <Image style={styles.image} source={{ uri: form.values.thumbnail }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw.style('flex flex-col flex-1')}>
              <TextInput
                placeholder='Name'
                value={form.values.name}
                style={styles.inputName}
                onChangeText={form.handleChange('name')}
              />
              <TextInput
                multiline={true}
                numberOfLines={3}
                placeholder='Description'
                value={form.values.description}
                style={styles.inputDescription}
                onChangeText={form.handleChange('description')}
              />
            </View>
          </View>
        </View>
        <XButton loading={isFetching} onPress={form.handleSubmit} color={tw.color('white')}>
          <XText style={tw.style('text-primary')}>Create product</XText>
        </XButton>
      </View>
      <CreateProductError product={form.values} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: tw.style('w-30 h-30'),
  imageTouch: tw.style('flex-1'),
  imagePicker: tw.style('flex-1 w-full h-full flex flex-row items-center justify-center absolute'),
  imageContainer: tw.style('bg-primary w-30 h-full bg-black rounded-l-lg relative'),
  inputName: tw.style('font-sans text-sm px-2 py-2 bg-white mb-2 rounded-tr-lg'),
  inputDescription: tw.style('font-sans text-sm px-2 py-2 bg-white flex-1 rounded-br-lg'),
  category: tw.style('bg-white -mb-2 flex-row'),
  categories: tw.style(''),
});

export default CreateProductScreen;
