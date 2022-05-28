import { useNavigation } from '@react-navigation/native';

export const useGoToUserProducts = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Products',
        params: {
          screen: 'ViewUserProducts',
        },
      },
    });
  };

  return callback;
};
