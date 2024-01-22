/* eslint-disable no-alert */
import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';

import { Button } from './button';

export const PrimaryButton = () => {
  return (
    <ThemeProvider>
      <Button
        id="primary-button"
        onClick={() => alert('Primary button clicked')}
      >
        Primary
      </Button>
    </ThemeProvider>
  );
};

export const SecondaryButton = () => {
  return (
    <ThemeProvider>
      <Button
        id="secondary-button"
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
      <Button id="primary-disabled-button" disabled>
        Disabled
      </Button>
    </ThemeProvider>
  );
};

export const TextButton = () => {
  return (
    <ThemeProvider>
      <Button
        id="text-button"
        onClick={() => alert('Text button clicked')}
        variant="text"
      >
        Text
      </Button>
    </ThemeProvider>
  );
};
