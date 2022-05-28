import { useNavigation } from '@react-navigation/native';

export const useGoToProduct = (productId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Products',
        params: {
          screen: 'ViewProduct',
          params: {
            id: productId,
          },
        },
      },
    });
  };

  return callback;
};
