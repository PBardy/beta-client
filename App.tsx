import useCachedResources from '@hooks/useCachedResources';
import { useAppColorScheme, useDeviceContext } from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { useFonts } from '@expo-google-fonts/montserrat';
import Navigation from './navigation';
import { store } from '@redux/store';
import tw from '@config/tailwind.config';
import React, { useEffect, useRef, useState } from 'react';
import { theme } from '@config/paper.config';
import { fonts } from '@config/fonts.config';
import { useNotifications } from '@hooks/useNotifications';
import { registerForPushNotificationsAsync } from '@util/registerForPushNotificationsAsync';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from 'expo-notifications';
import { Subscription } from 'expo-modules-core';
import { ModalProvider } from '@contexts/modal.context';
import { ServiceProvider } from '@contexts/service.context';

function App() {
  useNotifications();
  useDeviceContext(tw, { withDeviceColorScheme: false });

  const restoredCache = useCachedResources();
  const [colorScheme, _, setColorScheme] = useAppColorScheme(tw);
  const [fontsLoaded] = useFonts(fonts);
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<boolean>(false);
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    setColorScheme('light');
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    responseListener.current = addNotificationResponseReceivedListener(() => {});
    notificationListener.current = addNotificationReceivedListener(() => setNotification);

    return () => {
      if (!responseListener.current) return;
      if (!notificationListener.current) return;
      removeNotificationSubscription(responseListener.current);
      removeNotificationSubscription(notificationListener.current);
    };
  });

  if (!restoredCache || !fontsLoaded) {
    // Display splash screen
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <ServiceProvider>
            <ModalProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </ModalProvider>
          </ServiceProvider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}

function AppWrapper() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default AppWrapper;
