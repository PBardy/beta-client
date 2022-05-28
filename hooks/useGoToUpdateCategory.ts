import { useNavigation } from '@react-navigation/native';

export const useGoToUpdateCategory = (categoryId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Categories',
        params: {
          screen: 'UpdateCategory',
          params: {
            id: categoryId,
          },
        },
      },
    });
  };

  return callback;
};
