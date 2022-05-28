import * as Yup from 'yup';
import { TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Screen from '@components/Screen/Screen';
import { useIsFetching } from '@hooks/useIsFetching';
import { useAppDispatch } from '@hooks/useAppSelector';
import { createOneLocationThunk } from '@redux/thunks/locations.thunk';
import { useFormik } from 'formik';
import tw from '@config/tailwind.config';
import { Button, IconButton } from 'react-native-paper';
import XText from '@components/Typography/XText/XText';
import XButton from '@components/XButton/XButton';
import CreateLocationError from './CreateLocationError';

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

const CreateLocationsScreen = () => {
  const isFetching = useIsFetching('locations/create-one');
  const dispatch = useAppDispatch();

  const onSubmit = (values: Form) => {
    if (form.isValid) {
      dispatch(createOneLocationThunk(values));
    }
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <Screen>
      <View style={tw.style('flex flex-col flex-1 p-4')}>
        {/** Main form controls */}
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
            <XText>Create location</XText>
          </XButton>
        </View>
      </View>
      <CreateLocationError location={form.values} />
    </Screen>
  );
};

export default CreateLocationsScreen;
