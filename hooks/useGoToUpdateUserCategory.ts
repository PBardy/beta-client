import { useNavigation } from '@react-navigation/native';

export const useGoToUpdateUserCategory = (userCategoryId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'UserCategories',
        params: {
          screen: 'UpdateUserCategory',
          params: {
            id: userCategoryId,
          },
        },
      },
    });
  };

  return callback;
};
