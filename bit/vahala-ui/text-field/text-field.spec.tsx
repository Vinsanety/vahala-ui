import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextField } from './text-field.composition';

it('renders with the correct text', () => {
  const { getByLabelText } = render(<BasicTextField />);
  const rendered = getByLabelText('Label');
  expect(rendered).toBeTruthy();
});
