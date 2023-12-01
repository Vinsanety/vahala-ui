import React from 'react';
import { render } from '@testing-library/react';
import { DefaultThemeProvider } from './theme-provider.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<DefaultThemeProvider />);
  const rendered = getByText('Default Theme');
  expect(rendered).toBeTruthy();
});
