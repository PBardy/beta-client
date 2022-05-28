import { useNavigation } from '@react-navigation/native';

export const useGoToCreateUserProduct = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Products',
        params: {
          screen: 'CreateUserProduct',
        },
      },
    });
  };

  return callback;
};
