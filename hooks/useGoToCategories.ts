import { useNavigation } from '@react-navigation/native';

export const useGoToCategories = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Categories',
        params: {
          screen: 'ViewCategories',
        },
      },
    });
  };

  return callback;
};
