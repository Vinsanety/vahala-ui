import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';

import { Pagination } from './pagination';

export const BasicPagination = () => {
  return (
    <ThemeProvider>
      <Pagination count={10} />
    </ThemeProvider>
  );
};
