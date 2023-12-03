import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { FormControl, FormGroup, FormLabel } from '@mui/material';

import { Checkbox } from './checkbox';

export const BasicCheckbox = () => {
  return (
    <ThemeProvider>
      <FormControl>
        <FormGroup sx={{ display: 'flex', flexFlow: 'column wrap', gap: 1 }}>
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Unchecked" />
          {/* <Checkbox required label="Required" /> */}
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
          <Checkbox label="Group item 1" />
          <Checkbox label="Group item 2" />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export const SuccessErrorCheckbox = () => {
  return (
    <ThemeProvider>
      <FormControl>
        <FormGroup sx={{ display: 'flex', flexFlow: 'column wrap', gap: 1 }}>
          <Checkbox color="error" label="Error" />
          <Checkbox color="success" label="Success" defaultChecked />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
};
