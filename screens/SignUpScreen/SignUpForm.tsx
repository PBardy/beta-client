import * as Yup from 'yup';
import { View } from 'react-native';
import React from 'react';
import XTextInput from '@components/XTextInput/XTextInput';
import { hasError } from '@util/helpers';
import tw from '@config/tailwind.config';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useAppDispatch } from '@hooks/useAppSelector';
import { useFormik } from 'formik';
import { useIsFetching } from '@hooks/useIsFetching';
import SignUpError from './SignUpError';
import { useServices } from '@contexts/service.context';
import { start, stop } from '@redux/actions/api';
import { signUpAction } from '@redux/actions/auth';
import { setUserAction } from '@redux/actions/user';

interface Form {
  email: string;
  password: string;
}

const user: Form = {
  email: 'philip.b@gmail.com',
  password: 'password',
};

const initialValues: Form = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const SignUpForm = () => {
  const services = useServices();
  const dispatch = useAppDispatch();
  const isFetching = useIsFetching('auth/sign-up');

  const onSubmit = async (values: Form) => {
    dispatch(start('auth/sign-in'));
    const data = await services.auth.signUp(values);
    dispatch(signUpAction(data.token));
    dispatch(setUserAction(data.user));
    dispatch(stop('auth/sign-in'));
  };

  const onLongPress = async () => {
    dispatch(start('auth/sign-in'));
    const data = await services.auth.signUp(user);
    dispatch(signUpAction(data.token));
    dispatch(setUserAction(data.user));
    dispatch(stop('auth/sign-in'));
  };

  const form = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <React.Fragment>
      <View>
        <View style={tw.style('py-2')}>
          <XTextInput
            placeholder='Email'
            value={form.values.email}
            error={hasError(form.errors.email)}
            onChangeText={form.handleChange('email')}
          />
        </View>
        <View style={tw.style('py-2')}>
          <XTextInput
            placeholder='Password'
            secureTextEntry={true}
            value={form.values.password}
            error={hasError(form.errors.password)}
            onChangeText={form.handleChange('password')}
          />
        </View>
        <View style={tw.style('py-2')}>
          <XButton loading={isFetching} onPress={form.handleSubmit} onLongPress={onLongPress}>
            <XText>Sign Up</XText>
          </XButton>
        </View>
      </View>
      <SignUpError credentials={form.values} />
    </React.Fragment>
  );
};

export default SignUpForm;
