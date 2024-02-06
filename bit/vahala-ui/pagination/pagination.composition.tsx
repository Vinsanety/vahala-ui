import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { Pagination } from './pagination';

export const BasicPagination = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <ThemeProvider>
      <Box
        sx={{
          p: 2,
          mb: 2,
          height: 220,
          width: 520,
          border: '2px solid darkgrey',
          borderRadius: '0.325rem',
        }}
      >
        <Typography variant="h5">Page {page}</Typography>
      </Box>
      <Pagination count={10} page={page} onChange={handleChange} />
    </ThemeProvider>
  );
};
