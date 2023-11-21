import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButton } from './button.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<PrimaryButton />);
  const rendered = getByText('Primary');
  expect(rendered).toBeTruthy();
});
