import type { ReactNode } from 'react';
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type PaginationProps = MuiPaginationProps & {
  children?: ReactNode;
  /**
   * Mui prop, the total number of pages
   */
  count?: Number;
};

const PaginationStyles = styled(MuiPagination)<PaginationProps>(() => ({}));

export function Pagination({ children, count }: PaginationProps) {
  return (
    <PaginationStyles
      color="primary"
      variant="outlined"
      shape="rounded"
      count={count}
    >
      {children}
    </PaginationStyles>
  );
}
