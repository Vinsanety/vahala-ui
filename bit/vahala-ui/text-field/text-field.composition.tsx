import { useState } from 'react';
import { Box, MenuItem } from '@mui/material';

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

export const TextareaTextField = () => {
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2 }}>
        <TextField label="Textarea" placeholder="Placeholder" multiline />
      </Box>
    </ThemeProvider>
  );
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
export const SelectTextField = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2, width: 250 }}>
        <TextField
          label="Select"
          select
          value={selectedOption}
          onChange={handleChange}
          fullWidth
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </ThemeProvider>
  );
};
