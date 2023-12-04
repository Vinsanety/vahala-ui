import { useState } from 'react';
import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { Checkbox } from './checkbox';

export const BasicCheckbox = () => {
  return (
    <ThemeProvider>
      <FormControl>
        <FormGroup sx={{ display: 'flex', flexFlow: 'column wrap' }}>
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Unchecked" />
          <Checkbox required label="Required" />
          <Checkbox disabled label="Disabled" />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const CheckboxGroup = () => {
  return (
    <ThemeProvider>
      <FormControl>
        <FormLabel component="legend">Checkbox Group</FormLabel>
        <FormGroup>
          <Checkbox label="Item 1" />
          <Checkbox label="Item 2" />
        </FormGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
};

export const ErrorCheckboxGroup = () => {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.checked) {
      setCheckedCount((prevCount) => prevCount + 1);
    } else {
      setCheckedCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <ThemeProvider>
      <FormControl error={checkedCount !== 2}>
        <FormLabel component="legend">Error Group</FormLabel>
        <FormGroup>
          <Checkbox
            label="Item 1"
            required
            onChange={handleChange}
            color={checkedCount === 2 ? 'primary' : 'error'}
          />
          <Checkbox
            label="Item 2"
            required
            onChange={handleChange}
            color={checkedCount === 2 ? 'primary' : 'error'}
          />
        </FormGroup>
        <FormHelperText>
          {checkedCount === 2
            ? 'Both checkboxes are checked!'
            : 'Check two checkboxes.'}
        </FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
};

export const ErrorSuccessCheckbox = () => {
  const [errorLabel, setErrorLabel] = useState('Error');
  const [successLabel, setSuccessLabel] = useState('Check me');

  const handleErrorChange = (event) => {
    if (event.target.checked) {
      setErrorLabel('Checked');
    } else {
      setErrorLabel('Error');
    }
  };
  const handleSuccessChange = (event) => {
    if (event.target.checked) {
      setSuccessLabel('Success!');
    } else {
      setSuccessLabel('Check me');
    }
  };
  return (
    <ThemeProvider>
      <FormControl>
        <FormGroup sx={{ display: 'flex', flexFlow: 'column wrap' }}>
          <Checkbox
            color="error"
            label={errorLabel}
            onChange={handleErrorChange}
          />
          <Checkbox
            color="success"
            label={successLabel}
            onChange={handleSuccessChange}
          />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
};
