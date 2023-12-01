import { Box, createTheme } from '@mui/material';

import { Button } from '@vahalawebdesign/vahala-ui.button';
import { ThemeProvider } from './theme-provider';

export const DefaultThemeProvider = () => {
  return (
    <ThemeProvider>
      <Button>Default Theme</Button>
    </ThemeProvider>
  );
};

export const CustomButtonThemeProvider = () => {
  const docsTheme = createTheme({
    palette: {
      primary: {
        main: '#66bb6a',
      },
      secondary: {
        main: '#ffa726',
      },
    },
  });
  return (
    <ThemeProvider theme={docsTheme}>
      <Box sx={{ display: 'flex', flexFlow: 'column', gap: 2 }}>
        <Button>Custom Theme</Button>
        <Button color="secondary">Custom Theme</Button>
      </Box>
    </ThemeProvider>
  );
};
