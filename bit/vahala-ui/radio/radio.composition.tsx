import React from 'react';
import {
  FormControl,
  RadioGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { Radio } from './radio';

export const BasicRadioGroup = () => {
  return (
    <ThemeProvider>
      <FormControl>
        <FormLabel id="basic-radio-group-label">Radio Group</FormLabel>
        <RadioGroup
          aria-labelledby="basic-radio-group-label"
          name="basic-radio-group"
        >
          <Radio label="Option 1" value="option1" />
          <Radio label="Option 2" value="option2" />
          <Radio label="Option 3" value="option3" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const ErrorRadioGroup = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(true);
  const [helperText, setHelperText] = React.useState('Make a selection');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText('Selection made');
    setError(false);
  };
  return (
    <ThemeProvider>
      <FormControl error={error}>
        <FormLabel id="error-radio-group-label">Error Group</FormLabel>
        <RadioGroup
          aria-labelledby="error-radio-group-label"
          name="error-radio-group"
          value={value}
          onChange={handleRadioChange}
        >
          <Radio required label="Option 1" value="option1" />
          <Radio required label="Option 2" value="option2" />
          <Radio required label="Option 3" value="option3" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
};

export const RadioGroupRow = () => {
  return (
    <ThemeProvider>
      <FormControl sx={{ minWidth: 350 }}>
        <FormLabel id="row-radio-group-label">Row Group</FormLabel>
        <RadioGroup
          aria-labelledby="row-radio-group-label"
          name="row-radio-group"
          row
        >
          <Radio label="Row A" value="RowA" />
          <Radio label="Row B" value="RowB" />
          <Radio label="Row C" value="RowC" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const RadioGroupRowError = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(true);
  const [helperText, setHelperText] = React.useState('Make a selection');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText('Selection made');
    setError(false);
  };
  return (
    <ThemeProvider>
      <FormControl error={error} sx={{ minWidth: 350 }}>
        <FormLabel id="error-row-radio-group-label">Row Group</FormLabel>
        <RadioGroup
          aria-labelledby="error-row-radio-group-label"
          name="error-row-radio-group"
          value={value}
          onChange={handleRadioChange}
          row
        >
          <Radio label="Row A" value="RowA" />
          <Radio label="Row B" value="RowB" />
          <Radio label="Row C" value="RowC" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
};
