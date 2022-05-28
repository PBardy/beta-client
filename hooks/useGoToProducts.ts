import { useNavigation } from '@react-navigation/native';

export const useGoToProducts = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Products',
        params: {
          screen: 'ViewProducts',
        },
      },
    });
  };

  return callback;
};
