import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheckbox } from './checkbox.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicCheckbox />);
  const rendered = getByText('Checked');
  expect(rendered).toBeTruthy();
});
