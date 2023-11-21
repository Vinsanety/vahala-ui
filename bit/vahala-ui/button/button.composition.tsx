import { Button } from './button';

export const PrimaryButton = () => {
  return <Button>Primary</Button>;
};

export const SecondaryButton = () => {
  return <Button color="secondary">Secondary</Button>;
};

export const PrimaryDisabledPButton = () => {
  return <Button disabled>Disabled</Button>;
};

export const TextButton = () => {
  return <Button variant="text">Text</Button>;
};
