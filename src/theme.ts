import { createTheme } from '@mui/material/styles';

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

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: darkslate[700],
      paper: darkslate[500],
    },
    primary: {
      main: primary[500],
      light: primary[300],
      dark: primary[700],
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});
