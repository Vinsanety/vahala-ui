import React from 'react';
import { render } from '@testing-library/react';
import { BasicToggleButtonGroup } from './toggle-button.composition';

it('renders with the correct text', () => {
  const { getByLabelText } = render(<BasicToggleButtonGroup />);
  const rendered = getByLabelText('device');
  expect(rendered).toBeTruthy();
});
