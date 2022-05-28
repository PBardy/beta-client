import { useNavigation } from '@react-navigation/native';

export const useGoToUserLocations = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Locations',
        params: {
          screen: 'ViewUserLocations',
        },
      },
    });
  };

  return callback;
};
