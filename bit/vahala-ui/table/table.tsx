import type { ReactNode } from 'react';

import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableContainer,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type TableProps = MuiTableProps & {
  children?: ReactNode;
};

const TableStyles = styled(MuiTable)<TableProps>(() => ({
  '.MuiTableCell-root.MuiTableCell-body:first-child': {
    paddingLeft: '1.5rem',
  },
}));

export function Table({ children, ...props }: TableProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ borderRadius: '0.325rem' }}
    >
      <TableStyles {...props}>{children}</TableStyles>
    </TableContainer>
  );
}
