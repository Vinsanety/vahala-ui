import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';

import { Button } from './button';

export const PrimaryButton = () => {
  return (
    <ThemeProvider>
      <Button>Primary</Button>
    </ThemeProvider>
  );
};

export const SecondaryButton = () => {
  return (
    <ThemeProvider>
      <Button color="secondary">Secondary</Button>
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
      <Button variant="text">Text</Button>
    </ThemeProvider>
  );
};
