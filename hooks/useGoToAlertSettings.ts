import { useNavigation } from '@react-navigation/native';

export const useGoToAlertSettings = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Settings',
        params: {
          screen: 'AlertSettings',
        },
      },
    });
  };

  return callback;
};
