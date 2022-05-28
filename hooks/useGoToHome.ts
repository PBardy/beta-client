import { useNavigation } from '@react-navigation/native';

export const useGoToHome = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Home',
        params: {
          screen: 'ViewHome',
        },
      },
    });
  };

  return callback;
};
