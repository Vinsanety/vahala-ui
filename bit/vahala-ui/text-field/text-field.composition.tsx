import { Box } from '@mui/material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { TextField } from './text-field';

export const BasicTextField = () => {
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2 }}>
        <TextField label="Label" placeholder="placeholder" />
      </Box>
    </ThemeProvider>
  );
};
