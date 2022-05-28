import { useNavigation } from '@react-navigation/native';

export const useGoToUpdateUserProduct = (userProductId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'UserProducts',
        params: {
          screen: 'UpdateUserProduct',
          params: {
            id: userProductId,
          },
        },
      },
    });
  };

  return callback;
};
