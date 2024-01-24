import { useState } from 'react';
import { Box, MenuItem, IconButton, InputAdornment } from '@mui/material';

import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { TextField } from './text-field';

export const BasicTextField = () => {
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2 }}>
        <TextField
          id="basic-text-field"
          label="Label"
          placeholder="Placeholder"
          helperText="Helper text"
        />
      </Box>
    </ThemeProvider>
  );
};

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider>
      <TextField
        type={showPassword ? 'text' : 'password'}
        label="Password"
        helperText="Never share your passwords"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export const TextFieldStates = () => {
  const [value, setValue] = useState('');
  return (
    <ThemeProvider>
      <Box sx={{ mx: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          id="text-field-focused-state"
          focused
          label="Focused"
          placeholder="Focused"
          defaultValue="Focused"
        />
        <TextField
          id="text-field-disabled-state"
          label="Disabled"
          placeholder="Disabled"
          disabled
        />
        <TextField
          id="text-field-error-state"
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
        <TextField
          id="textarea-text-field"
          label="Textarea"
          placeholder="Placeholder"
          multiline
        />
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
          id="select-text-field"
          label="Select"
          select
          defaultValue="option1"
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
