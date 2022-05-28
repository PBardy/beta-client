import { useNavigation } from '@react-navigation/native';

export const useGoToLocations = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Locations',
        params: {
          screen: 'ViewLocations',
        },
      },
    });
  };

  return callback;
};
