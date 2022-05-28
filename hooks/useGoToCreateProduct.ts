import { useNavigation } from '@react-navigation/native';

export const useGoToCreateProduct = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Products',
        params: {
          screen: 'CreateProduct',
        },
      },
    });
  };

  return callback;
};
