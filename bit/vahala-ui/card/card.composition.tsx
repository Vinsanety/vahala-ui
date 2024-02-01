import { Box } from '@mui/material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { Card } from './card';

export const BasicCard = () => {
  return (
    <ThemeProvider>
      <Box sx={{ p: 2, width: 350 }}>
        <Card cardTitle="Basic Card" cardContent="Card Content" />
      </Box>
    </ThemeProvider>
  );
};

export const CardOptions = () => {
  return (
    <ThemeProvider>
      <Box sx={{ p: 2, width: 350 }}>
        <Card
          cardTitle="Card Title"
          cardContent="Card Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          cardMediaImage="https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="
          cardMediaTitle="Placeholder"
          primaryButtonText="Primary"
          textButtonText="Text"
        />
      </Box>
    </ThemeProvider>
  );
};

export const ExampleCard = () => {
  return (
    <ThemeProvider>
      <Box sx={{ p: 2, width: 350 }}>
        <Card
          cardTitle="Longs Peak"
          cardContent="Longs Peak is a high and prominent mountain in the northern Front Range of the Rocky Mountains of North America. The 14,259-foot fourteener is located in the Rocky Mountain National Park Wilderness, 9.6 miles southwest by south of the Town of Estes Park, Colorado, United States."
          cardMediaImage="https://www.nps.gov/romo/planyourvisit/images/Longs_13.jpg?width=1300&autorotate=false&quality=78&format=webp"
          cardMediaTitle="Longs Peak"
        />
      </Box>
    </ThemeProvider>
  );
};
