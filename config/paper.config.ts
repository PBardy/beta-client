import { configureFonts, DefaultTheme } from 'react-native-paper';

const fonts = {
  regular: {
    fontFamily: 'Montserrat_400Regular',
    fontWeight: 'normal' as 'normal',
  },
  medium: {
    fontFamily: 'Montserrat_500Medium',
    fontWeight: 'normal' as 'normal',
  },
  light: {
    fontFamily: 'Montserrat_300Light',
    fontWeight: 'normal' as 'normal',
  },
  thin: {
    fontFamily: 'Montserrat_100Thin',
    fontWeight: 'normal' as 'normal',
  },
};

const fontConfig = {
  web: fonts,
  ios: fonts,
  android: fonts,
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#5b5be6',
    accent: '#f1c40f',
  },
};
