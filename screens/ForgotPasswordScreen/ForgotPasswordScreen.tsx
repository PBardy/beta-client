import { View, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';
import tw from '@config/tailwind.config';
import XHeading1 from '@components/Typography/XHeading1/XHeading1';
import XParagraph from '@components/XParagraph/XParagraph';
import XLabel from '@components/Typography/XLabel/XLabel';
import XTextInput from '@components/XTextInput/XTextInput';
import { object, string } from 'yup';
import { errors } from '@constants/Error';
import { useFormik } from 'formik';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useAppDispatch } from '@hooks/useAppSelector';
import XLink from '@components/Typography/XLink/XLink';
import { useGoToSignIn } from '@hooks/useGoToSignIn';

type Form = {
  email: string;
};

const initialValues: Form = {
  email: '',
};

const validationSchema = object().shape({
  email: string().required(errors.form.EMAIL_ADDRESS_REQUIRED),
});

const ForgotPasswordScreen = () => {
  const dispatch = useAppDispatch();
  const goToSignIn = useGoToSignIn();

  const onSubmit = (values: Form) => {
    if (form.isValid) {
      //
    }
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={tw.style('bg-gray p-5')}>
            <XHeading1>Forgot Password?</XHeading1>
            <XParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum esse vitae voluptates
              delectus doloremque enim odit, illo nesciunt quasi fuga, illum veritatis quod eius
              itaque accusamus fugiat voluptatem ex eveniet.
            </XParagraph>
            <View style={tw.style('mt-4 mb-2')}>
              <XLabel>Email address</XLabel>
              <XTextInput placeholder='Email address' onChangeText={form.handleChange('email')} />
            </View>
            <View style={tw.style('my-2')}>
              <XButton onPress={form.handleSubmit}>
                <XText>Submit</XText>
              </XButton>
            </View>
            <View style={tw.style('flex flex-row w-full my-1 justify-center')}>
              <XLink url={goToSignIn}>Return to sign in</XLink>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
