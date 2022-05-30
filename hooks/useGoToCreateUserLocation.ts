import { useNavigation } from '@react-navigation/native';

export const useGoToCreateUserLocation = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Locations',
        params: {
          screen: 'CreateUserLocation',
        },
      },
    });
  };

  return callback;
};
