/* eslint-disable no-alert */
import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';

import { Button } from './button';

export const PrimaryButton = () => {
  return (
    <ThemeProvider>
      <Button onClick={() => alert('Primary button clicked')}>Primary</Button>
    </ThemeProvider>
  );
};

export const SecondaryButton = () => {
  return (
    <ThemeProvider>
      <Button
        onClick={() => alert('Secondary button clicked')}
        color="secondary"
      >
        Secondary
      </Button>
    </ThemeProvider>
  );
};

export const PrimaryDisabledButton = () => {
  return (
    <ThemeProvider>
      <Button disabled>Disabled</Button>
    </ThemeProvider>
  );
};

export const TextButton = () => {
  return (
    <ThemeProvider>
      <Button onClick={() => alert('Text button clicked')} variant="text">
        Text
      </Button>
    </ThemeProvider>
  );
};
