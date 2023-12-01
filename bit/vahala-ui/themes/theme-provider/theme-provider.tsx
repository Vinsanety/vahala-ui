import React, { ReactNode } from 'react';
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
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#FFFF00',
    },
  },
});

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
