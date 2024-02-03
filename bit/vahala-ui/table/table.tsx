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
  /**
   * Wraps the Table in a Paper, giving it elevation
   */
  tableContainer?: Boolean;
};

const TableStyles = styled(MuiTable)<TableProps>(() => ({
  // Table Head
  '.MuiTableHead-root': {
    borderBottom: '0.125rem solid #000',

    '.MuiTableCell-root.MuiTableCell-head': {
      fontWeight: 700,
    },
  },
  // Table Cell
  '.MuiTableCell-root:first-child:not(.MuiTableCell-sizeSmall)': {
    paddingLeft: '1.5rem',
  },
  '.MuiTableCell-root:last-child:not(.MuiTableCell-sizeSmall)': {
    paddingRight: '1.5rem',
  },
}));

export function Table({ children, tableContainer, ...props }: TableProps) {
  return (
    <TableContainer
      component={tableContainer && Paper}
      elevation={3}
      sx={{ borderRadius: '0.325rem' }}
    >
      <TableStyles {...props}>{children}</TableStyles>
    </TableContainer>
  );
}
