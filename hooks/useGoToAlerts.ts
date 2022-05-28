import { useNavigation } from '@react-navigation/native';

export const useGoToAlerts = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Alerts',
        params: {
          screen: 'Alerts',
        },
      },
    });
  };

  return callback;
};
