import React from 'react';
import { render } from '@testing-library/react';
import { BasicRadioGroup } from './radio.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicRadioGroup />);
  const rendered = getByText('Option 1');
  expect(rendered).toBeTruthy();
});
