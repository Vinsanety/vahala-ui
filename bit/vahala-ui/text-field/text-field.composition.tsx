import { useState } from 'react';
import { Box } from '@mui/material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { TextField } from './text-field';

export const BasicTextField = () => {
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2 }}>
        <TextField
          label="Label"
          placeholder="Placeholder"
          helperText="Helper text"
        />
      </Box>
    </ThemeProvider>
  );
};

export const TextFieldStates = () => {
  const [value, setValue] = useState('');
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          focused
          label="Focused"
          placeholder="Focused"
          defaultValue="Focused"
        />
        <TextField label="Disabled" placeholder="Disabled" disabled />
        <TextField
          label="Error"
          placeholder="Error"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={value === ''}
          helperText={value === '' ? 'Please enter a value' : 'Value entered'}
        />
      </Box>
    </ThemeProvider>
  );
};
