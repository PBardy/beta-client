import { create } from 'twrnc';

const tw = create({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat_500Medium',
      },
      colors: {
        accent: '',
        primary: '#5b5be6',
        secondary: '#dad6eb',
        tertiary: '',
        link: '#397AF9',
        error: '#f53b3b',
        gray: '#f3f3f3',
        blue: '#1877f2',
        white: '#ffffff',
        red: '#f53b3b',
      },
    },
    screens: {
      sm: '380px',
      md: '420px',
      lg: '680px',
      tablet: '1024px',
    },
  },
});

export default tw;
