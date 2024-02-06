import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { Pagination } from './pagination';

const LoremIpsumText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  'Aliquam at velit viverra enim.',
];

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
        <Typography variant="body2" sx={{ mt: 2 }}>
          {LoremIpsumText[page - 1]}
        </Typography>
      </Box>
      <Pagination count={10} page={page} onChange={handleChange} />
    </ThemeProvider>
  );
};
