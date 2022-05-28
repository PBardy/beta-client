import { useNavigation } from '@react-navigation/native';

export const useGoToUpdateUserLocation = (userLocationId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'UserLocations',
        params: {
          screen: 'UpdateUserLocation',
          params: {
            id: userLocationId,
          },
        },
      },
    });
  };

  return callback;
};
