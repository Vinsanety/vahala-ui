import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type PaginationProps = MuiPaginationProps & {
  /**
   * Mui prop, the total number of pages
   */
  count?: Number;
  /**
   * Mui prop, callback fired when the page is changed
   */
  onChange?: Function;
  /**
   * Mui prop, when true it hides the next page icon button
   */
  hideNextButton?: Boolean;
  /**
   * Mui prop, when true it hides the previous page icon button
   */
  hidePrevButton?: Boolean;
  /**
   * Mui prop, when true it shows the go to first page icon button
   */
  showFirstButton?: Boolean;
  /**
   * Mui prop, when true it shows teh go to last page icon button
   */
  showLastButton?: Boolean;
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

export function Pagination({
  count,
  onChange,
  hideNextButton = false,
  hidePrevButton = false,
  showFirstButton = true,
  showLastButton = true,
  ...props
}: PaginationProps) {
  return (
    <PaginationStyles
      color="primary"
      variant="outlined"
      shape="rounded"
      onChange={onChange}
      hideNextButton={hideNextButton}
      hidePrevButton={hidePrevButton}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      count={count}
      {...props}
    />
  );
}
