import { useState } from 'react';
import { Box, ToggleButtonGroup } from '@mui/material';
import {
  FormatAlignLeft as FormatAlignLeftIcon,
  Laptop as LaptopIcon,
  Tv as TvIcon,
  PhoneAndroid as PhoneAndroidIcon,
} from '@mui/icons-material';

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { ToggleButton } from './toggle-button';

export const BasicToggleButtonGroup = () => {
  const [devices, setDevices] = useState(() => ['']);
  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[]
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };
  return (
    <ThemeProvider>
      <Box sx={{ p: 2 }}>
        <ToggleButtonGroup
          value={devices}
          onChange={handleDevices}
          aria-label="device"
        >
          <ToggleButton value="laptop" aria-label="laptop">
            <LaptopIcon />
          </ToggleButton>
          <ToggleButton value="tv" aria-label="tv">
            <TvIcon />
          </ToggleButton>
          <ToggleButton value="phone" aria-label="phone">
            <PhoneAndroidIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </ThemeProvider>
  );
};

export const StandaloneToggleButton = () => {
  const [selected, setSelected] = useState(false);
  return (
    <ThemeProvider>
      <Box sx={{ p: 2 }}>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <FormatAlignLeftIcon />
        </ToggleButton>
      </Box>
    </ThemeProvider>
  );
};
