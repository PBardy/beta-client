import { useNavigation } from '@react-navigation/native';

export const useGoToLocation = (locationId: string) => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Locations',
        params: {
          screen: 'ViewLocation',
          params: {
            id: locationId,
          },
        },
      },
    });
  };

  return callback;
};
