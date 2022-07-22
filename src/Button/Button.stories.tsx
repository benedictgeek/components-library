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
    <Box>
      <Button variant="contained">My default</Button>
      <Button variant="outlined">My default</Button>
      <Button variant="text">My default</Button>
    </Box>
  </ThemeProvider>
);
export const Secondary = () => (
  <ThemeProvider>
    <Button color="secondary">Secondary btn</Button>
  </ThemeProvider>
);
