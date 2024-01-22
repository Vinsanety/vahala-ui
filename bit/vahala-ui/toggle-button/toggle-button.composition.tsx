import React, { useState } from 'react';
import { Box, ToggleButtonGroup } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

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
  const [selected, setSelected] = React.useState(false);
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
