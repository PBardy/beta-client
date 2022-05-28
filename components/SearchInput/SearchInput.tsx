import * as Yup from 'yup';
import { View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import tw from '@config/tailwind.config';
import { IconButton, Menu } from 'react-native-paper';
import XText from '@components/Typography/XText/XText';
import { useFormik } from 'formik';

type Props = {
  textInputProps?: React.ComponentProps<typeof TextInput>;
};

type Form = {
  query: string;
  filters: string;
};

const initialValues: Form = {
  query: '',
  filters: '',
};

const validationSchema = Yup.object().shape({
  query: Yup.string(),
  filters: Yup.string(),
});

const SearchInput = (props: Props) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const select = (type: string) => {
    isSelected(type) ? setFilter(null) : setFilter(type);
  };

  const isSelected = (type: string) => {
    return type === filter;
  };

  const onSubmit = (values: Form) => {
    console.log(values);
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <View style={tw.style('flex flex-row items-center')}>
      <View style={tw.style('flex flex-row items-center flex-1')}>
        <View style={tw.style('rounded-l-full bg-white pl-1')}>
          <IconButton size={24} icon='magnify' />
        </View>
        <TextInput
          {...props.textInputProps}
          placeholder='Search'
          style={tw.style('flex-1 font-sans bg-white py-3 text-sm')}
          onChangeText={form.handleChange('query')}
        />
      </View>
      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={
          <TouchableOpacity activeOpacity={1} onPress={() => setShowMenu(true)}>
            <View style={tw.style('bg-primary rounded-r-full')}>
              <View style={tw.style('flex flex-row items-center px-4')}>
                <XText style={tw.style('flex-1 text-white')}>Filter</XText>
                <IconButton
                  size={24}
                  icon='chevron-down'
                  style={tw.style('-mr-2')}
                  color={tw.color('white')}
                  onPress={() => setShowMenu(true)}
                />
              </View>
            </View>
          </TouchableOpacity>
        }>
        <Menu.Item
          title='Category'
          icon={isSelected('category') ? 'check' : 'random'}
          titleStyle={tw.style('text-sm -ml-4')}
          onPress={() => select('category')}
        />
        <Menu.Item
          title='Expiry date'
          icon={isSelected('expiry-date') ? 'check' : 'random'}
          titleStyle={tw.style('text-sm -ml-4')}
          onPress={() => select('expiry-date')}
        />
      </Menu>
    </View>
  );
};

export default SearchInput;
