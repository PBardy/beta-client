import { useNavigation } from '@react-navigation/native';

export const useGoToForgotPassword = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Unauthenticated', {
      screen: 'ForgotPassword',
    });
  };

  return callback;
};
