import React from 'react';
import { render } from '@testing-library/react';
import { BasicTable } from './table.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicTable />);
  const rendered = getByText('Dessert (100g serving)');
  expect(rendered).toBeTruthy();
});
