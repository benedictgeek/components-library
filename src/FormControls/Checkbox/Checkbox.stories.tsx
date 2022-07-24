import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '.';
import { ThemeProvider } from '../../ThemeProvider';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

export const Default = () => (
  <ThemeProvider>
    <Box>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
    </Box>

    <Box>
      <Checkbox label="Labelled checkbox" />
    </Box>

    <Box>
      <Checkbox
        label="Labelled checkbox with label props applied"
        labelProps={{ labelPlacement: 'start' }}
      />
    </Box>
  </ThemeProvider>
);
