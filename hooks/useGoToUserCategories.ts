import { useNavigation } from '@react-navigation/native';

export const useGoToUserCategories = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Categories',
        params: {
          screen: 'ViewUserCategories',
        },
      },
    });
  };

  return callback;
};
