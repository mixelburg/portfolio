import { extendTheme } from '@mui/joy';


export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#1C1E2B',
          surface: '#2A2C47',
          level1: '#3A3D5E',
        },
        primary: {
          mainChannel: '#651EF4',
          50: '#FDF7FF',
          100: '#F4EAFF',
          200: '#E1CBFF',
          300: '#C69EFF',
          400: '#A374F9',
          500: '#814DDE',
          600: '#5F35AE',
          700: '#452382',
          800: '#301761',
          900: '#1D0A42',
        },
      },
    },
  },
});
