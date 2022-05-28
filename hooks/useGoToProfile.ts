import { useNavigation } from '@react-navigation/native';

export const useGoToProfile = () => {
  const nav = useNavigation();
  const callback = () => {
    nav.navigate('Authenticated', {
      screen: 'Dashboard',
      params: {
        screen: 'Settings',
        params: {
          screen: 'Profile',
        },
      },
    });
  };

  return callback;
};
