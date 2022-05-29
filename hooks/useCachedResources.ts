import { storage } from '@config/storage.config';
import { FontAwesome } from '@expo/vector-icons';
import { signInThunk } from '@redux/thunks/auth.thunk';
import { getAllCategoriesThunk } from '@redux/thunks/categories.thunk';
import { getAllLocationsThunk } from '@redux/thunks/locations.thunk';
import { getAllProductsThunk } from '@redux/thunks/products.thunk';
import { getAllUserProductsThunk } from '@redux/thunks/user-products.thunk';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './useAppSelector';

export default function useCachedResources() {
  const dispatch = useAppDispatch();
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Restore cache to state
        const email = storage.getItem('email');
        const password = storage.getItem('password');

        if (email && password) {
          dispatch(signInThunk({ email, password }));
        }

        // Preload resources
        dispatch(getAllProductsThunk());
        dispatch(getAllLocationsThunk());
        dispatch(getAllCategoriesThunk());
        dispatch(getAllUserProductsThunk());

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
