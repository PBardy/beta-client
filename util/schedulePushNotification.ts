import type { IAlert } from '@interfaces/alerts.interface';
import { scheduleNotificationAsync } from 'expo-notifications';

export const schedulePushNotification = async (alert: IAlert, delay: number) => {
  await scheduleNotificationAsync({
    content: alert,
    trigger: { seconds: delay },
  });
};
