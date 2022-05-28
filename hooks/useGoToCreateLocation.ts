import { useNavigation } from '@react-navigation/native';

export const useGoToCreateLocation = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Locations',
        params: {
          screen: 'CreateLocation',
        },
      },
    });
  };

  return callback;
};
