import * as Yup from 'yup';
import { TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Screen from '@components/Screen/Screen';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch } from '@hooks/useAppSelector';
import { UpdateLocationParams } from '@types';
import { useLocation } from '@hooks/useLocations';
import { useIsFetching } from '@hooks/useIsFetching';
import { useFormik } from 'formik';
import tw from '@config/tailwind.config';
import { Button, IconButton } from 'react-native-paper';
import XText from '@components/Typography/XText/XText';
import XButton from '@components/XButton/XButton';

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

const UpdateLocationScreen = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const params = route.params as UpdateLocationParams;
  const location = useLocation(params.id);
  const isFetching = useIsFetching('locations/update-one');
  const [showColors, setShowColors] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const onSubmit = (values: Form) => {
    if (!form.isValid) return;
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
          <View style={tw.style('flex flex-row')}>
            <View style={tw.style('mr-2 bg-white')}>
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
        <View style={tw.style('my-3')}>
          <View style={tw.style('bg-white rounded-lg my-1')}>
            <Button uppercase={false} icon='plus' onPress={() => setShowColors(true)}>
              <XText>Choose color</XText>
            </Button>
          </View>
          <View style={tw.style('bg-white rounded-lg my-1')}>
            <Button uppercase={false} icon='plus' onPress={() => setShowCategories(true)}>
              <XText>Add categories</XText>
            </Button>
          </View>
        </View>
        <View>
          <XButton loading={isFetching} onPress={form.handleSubmit}>
            <XText>Update location</XText>
          </XButton>
        </View>
      </View>
    </Screen>
  );
};

export default UpdateLocationScreen;
