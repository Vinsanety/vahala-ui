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
  /**
   * Mui prop, callback fired when the page is changed
   */
  onChange?: Function;
};

const PaginationStyles = styled(MuiPagination)<PaginationProps>(
  ({ theme }) => ({
    '.MuiButtonBase-root.MuiPaginationItem-outlined.MuiPaginationItem-rounded':
      {
        color: theme.palette.primary.dark,
        border: `0.125rem solid ${theme.palette.primary.dark}`,
        borderRadius: '0.325rem',
        transition: 'all 0.25s ease-in-out, outline 0.1s ease',

        // Hover state
        '@media (pointer: fine)': {
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.dark,
          },
        },

        // Focus state
        '&.Mui-focusVisible': {
          backgroundColor: 'transparent',
          borderRadius: '0.325rem',
          outline: `0.375rem solid ${theme.palette.primary[100]}`,
        },

        // Active state
        '&:active': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.light,
        },

        // Selected state
        '&.Mui-selected': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
          },
          '&:active': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.light,
          },
        },
      },
  })
);

export function Pagination({ children, count, onChange }: PaginationProps) {
  return (
    <PaginationStyles
      color="primary"
      variant="outlined"
      shape="rounded"
      showFirstButton
      showLastButton
      onChange={onChange}
      count={count}
    >
      {children}
    </PaginationStyles>
  );
}
