import * as Yup from 'yup';
import { View } from 'react-native';
import React from 'react';
import XTextInput from '@components/XTextInput/XTextInput';
import XButton from '@components/XButton/XButton';
import XText from '@components/Typography/XText/XText';
import { useFormik } from 'formik';
import { useAppDispatch } from '@hooks/useAppSelector';
import { hasError } from '@util/helpers';
import tw from '@config/tailwind.config';
import XLink from '@components/Typography/XLink/XLink';
import { useGoToForgotPassword } from '@hooks/useGoToForgotPassword';
import { useIsFetching } from '@hooks/useIsFetching';
import SignInError from './SignInError';
import { useServices } from '@contexts/service.context';
import { start, stop } from '@redux/actions/api';
import { signInAction } from '@redux/actions/auth';
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

const SignInForm = () => {
  const services = useServices();
  const dispatch = useAppDispatch();
  const isFetching = useIsFetching('auth/sign-in');
  const forgotPassword = useGoToForgotPassword();

  const onSubmit = async (values: Form) => {
    dispatch(start('auth/sign-in'));
    const data = await services.auth.signIn(values);
    dispatch(signInAction(data.token));
    dispatch(setUserAction(data.user));
    dispatch(stop('auth/sign-in'));
  };

  const onLongPress = async () => {
    dispatch(start('auth/sign-in'));
    const data = await services.auth.signIn(user);
    dispatch(signInAction(data.token));
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
        <View style={tw.style('flex flex-row justify-center py-2')}>
          <XLink url={forgotPassword}>Forgot password?</XLink>
        </View>
        <View style={tw.style('py-2')}>
          <XButton loading={isFetching} onPress={form.handleSubmit} onLongPress={onLongPress}>
            <XText>Sign In</XText>
          </XButton>
        </View>
      </View>
      <SignInError credentials={form.values} />
    </React.Fragment>
  );
};

export default SignInForm;
