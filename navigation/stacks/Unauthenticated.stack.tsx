import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmEmailScreen from '@screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '@screens/ForgotPasswordScreen/ForgotPasswordScreen';
import SignInScreen from '@screens/SignInScreen/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen/SignUpScreen';
import type { UnauthenticatedStackParamsList } from '@types';

const Stack = createNativeStackNavigator<UnauthenticatedStackParamsList>();

export const UnauthenticatedStack = () => (
  <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='SignIn' component={SignInScreen} />
    <Stack.Screen name='SignUp' component={SignUpScreen} />
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
    <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
  </Stack.Navigator>
);
