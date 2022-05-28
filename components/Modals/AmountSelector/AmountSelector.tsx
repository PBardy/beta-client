import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { IModalContext } from '@contexts/modal.context';
import tw from '@config/tailwind.config';
import { IconButton } from 'react-native-paper';
import XTextInput from '@components/XTextInput/XTextInput';
import { useFormik } from 'formik';
import { number, object } from 'yup';
import XHeading3 from '@components/Typography/XHeading3/XHeading3';
import Keyboard from '@components/Keyboard/Keyboard';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';

type Props = IModalContext & {
  initialValue: number;
  onConfirm: (value: number) => void;
};

type Form = {
  value: number;
};

const initialValues: Form = {
  value: 0,
};

const validationSchema = object().shape({
  value: number().required(),
});

const AmountSelector = (props: Props) => {
  const { initialValue, onConfirm, closeModal } = props;

  const onSubmit = (values: Form) => {
    onConfirm(values.value);
    closeModal();
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  useEffect(() => {
    form.setFieldValue('value', initialValue);
  }, []);

  return (
    <View style={tw.style('bg-white p-5 m-5 rounded-lg')}>
      <View style={tw.style('flex flex-col items-center')}>
        <XHeading3 style={tw.style('text-primary text-center uppercase')}>Choose value</XHeading3>
        <View style={tw.style('flex flex-row items-center w-full')}>
          <XTextInput
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='numeric'
            error={Boolean(form.errors.value)}
            value={String(form.values.value)}
            style={tw.style('w-full text-center')}
          />
        </View>
        <View style={tw.style('my-3')}>
          <Keyboard />
        </View>
        <View style={tw.style('w-full')}>
          <XButton>
            <XText>Confirm</XText>
          </XButton>
        </View>
      </View>
    </View>
  );
};

export default AmountSelector;
