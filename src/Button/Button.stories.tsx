import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/material/Box';
import { Button } from '.';
import { ThemeProvider } from '../ThemeProvider';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Primary = () => (
  <ThemeProvider>
    <Box
      sx={{
        display: 'flex',
        bgcolor: 'background.paper',
      }}
    >
      <Button sx={{ m: 1 }} variant="contained">
        My default
      </Button>

      <Button sx={{ m: 1 }} variant="outlined">
        My default
      </Button>

      <Button sx={{ m: 1 }} variant="text">
        My default
      </Button>
    </Box>
  </ThemeProvider>
);
export const Secondary = () => (
  <ThemeProvider>
    <Button color="secondary">Secondary btn</Button>
  </ThemeProvider>
);
