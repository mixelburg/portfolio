import { extendTheme } from '@mui/joy';

export const darkslate = {
  50: '#f7f7f7',
  100: '#e3e3e3',
  200: '#c9c9c9',
  300: '#6b6b6b',
  400: '#383838',
  500: '#171717',
  600: '#141414',
  700: '#111111',
  800: '#0e0e0e',
  900: '#0b0b0b',
};

export const primary = {
  100: '#F4EAFF',
  200: '#E1CBFF',
  300: '#C69EFF',
  400: '#A374F9',
  500: '#814DDE',
  600: '#5F35AE',
  700: '#452382',
  800: '#301761',
  900: '#1D0A42',
};

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: darkslate[700],
          surface: darkslate[500],
          level1: darkslate[400],
        },
        primary: {
          50: primary[100],
          100: primary[100],
          200: primary[200],
          300: primary[300],
          400: primary[400],
          500: primary[500],
          600: primary[600],
          700: primary[700],
          800: primary[800],
          900: primary[900],
        },
      },
    },
  },
  fontFamily: {
    body: '"Inter", sans-serif',
    display: '"Inter", sans-serif',
  },
});
