import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio } from '.';
import { ThemeProvider } from '../../ThemeProvider';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Radio',
  component: Radio,
};

export default meta;

export const Default = () => (
  <ThemeProvider>
    <Box>
      <Radio />
      <Radio checked />
      <Radio disabled />
    </Box>

    <Box>
      <Radio label="Labelled checkbox" />
    </Box>

    <Box>
      <Radio
        label="Labelled checkbox with label props applied"
        labelProps={{ labelPlacement: 'start' }}
      />
    </Box>
  </ThemeProvider>
);
