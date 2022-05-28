import {
  AndroidImportance,
  getExpoPushTokenAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
  setNotificationChannelAsync,
} from 'expo-notifications';
import { isDevice } from 'expo-device';
import { Platform } from 'react-native';

export const registerForPushNotificationsAsync = async () => {
  let token;

  if (isDevice) {
    const { status: existingStatus } = await getPermissionsAsync();

    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      //alert('Failed to get push token for push notification!');
      return;
    }

    token = (await getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    setNotificationChannelAsync('default', {
      name: 'default',
      importance: AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
};
