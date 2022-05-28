import { useNavigation } from '@react-navigation/native';

export const useGoToSignUp = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Unauthenticated', {
      screen: 'SignUp',
    });
  };

  return callback;
};
