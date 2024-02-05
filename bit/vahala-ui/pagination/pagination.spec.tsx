import React from 'react';
import { render } from '@testing-library/react';
import { BasicPagination } from './pagination.composition';

it('renders with the correct text', () => {
  const { getByRole } = render(<BasicPagination />);
  const rendered = getByRole('navigation');
  expect(rendered).toBeTruthy();
});
