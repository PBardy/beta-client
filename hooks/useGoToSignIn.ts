import { useNavigation } from '@react-navigation/native';

export const useGoToSignIn = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Unauthenticated', {
      screen: 'SignIn',
    });
  };

  return callback;
};
