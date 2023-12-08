import { ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
} from '@mui/material';

export type ThemeProviderProps = {
  /**
   * a custom MUI theme object. If none is supplied, will use default theme objet
   */
  theme?: Theme;
  children: ReactNode;
};

const defaultTheme = createTheme({
  // ===Palette===
  palette: {
    mode: 'light',
    primary: {
      dark: '#2C387E',
      main: '#3f51b5', // 500 (https://m2.material.io/inline-tools/color/)
      light: '#6573C3',
      100: '#c5cae9', // "Lightest"
      contrastText: '#FFF',
    },
    secondary: {
      dark: '#6D1B7B',
      main: '#9c27b0', // 500 (https://m2.material.io/inline-tools/color/)
      light: '#AF52BF',
      100: '#e1bee7', // "Lightest"
    },
  },
  // ===Typography===
  typography: {
    fontSize: 16,
  },
  // ===Components===
  components: {
    // ##Form Label##
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: '0.5rem',
        },
      },
    },
    // ##Form Control Label (checkbox, radio)##
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: '0.5rem 1.5rem 0.5rem 0',
        },
      },
    },
    // ##Form Helper Text##
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '0.75rem',
          marginLeft: 0,
        },
      },
    },
  },
});

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
