import { useNavigation } from '@react-navigation/native';

export const useGoToUpdateProduct = (productId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Products',
        params: {
          screen: 'UpdateProduct',
          params: {
            id: productId,
          },
        },
      },
    });
  };

  return callback;
};
