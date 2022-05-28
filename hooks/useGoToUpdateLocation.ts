import { useNavigation } from '@react-navigation/native';

export const useGoToUpdateLocation = (locationId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Locations',
        params: {
          screen: 'UpdateLocation',
          params: {
            id: locationId,
          },
        },
      },
    });
  };

  return callback;
};
