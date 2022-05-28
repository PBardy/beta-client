import { View, Text } from 'react-native';
import React from 'react';
import { IModalContext } from '@contexts/modal.context';
import tw from '@config/tailwind.config';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import { IconButton, TextInput } from 'react-native-paper';
import XTextInput from '@components/XTextInput/XTextInput';
import { object, string } from 'yup';
import { useFormik } from 'formik';

type Form = {
  search: string;
};

type Props = IModalContext & {};

const initialValues: Form = {
  search: '',
};

const validationSchema = object().shape({
  search: string().required(),
});

const SearchModal = (props: Props) => {
  const onSubmit = (values: Form) => {};

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <View style={tw.style('bg-white px-5 py-2 m-5 rounded-lg')}>
      <View style={tw.style('flex flex-row items-center justify-between')}>
        <XHeading3>Search Items</XHeading3>
        <IconButton
          style={tw.style('p-0 m-0 -mr-2')}
          size={32}
          icon='close'
          onPress={() => props.closeModal()}
        />
      </View>
      <View style={tw.style('pb-3')}>
        <XTextInput
          error={Boolean(form.errors.search)}
          value={form.values.search}
          autoFocus={true}
          autoCapitalize='none'
          placeholder='Search items...'
          right={<TextInput.Icon icon='magnify' />}
          onChangeText={form.handleChange('search')}
          style={tw.style('py-0')}
        />
      </View>
    </View>
  );
};

export default SearchModal;
