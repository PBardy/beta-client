import Google from 'expo-auth-session/providers/google';
import Facebook from 'expo-auth-session/providers/facebook';
import { makeRedirectUri } from 'expo-auth-session';
import { Platform } from 'react-native';

const useProxy = Platform.select({ web: false, default: true });

export const gauth: Google.GoogleAuthRequestConfig = {
  clientId: '',
  redirectUri: makeRedirectUri({ useProxy }),
};

export const fauth: Facebook.FacebookAuthRequestConfig = {
  clientId: '',
  redirectUri: makeRedirectUri({ useProxy }),
};
