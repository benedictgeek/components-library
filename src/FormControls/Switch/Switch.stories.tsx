import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch } from '.';
import { ThemeProvider } from '../../ThemeProvider';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Inputs/Switch',
  component: Switch,
};

export default meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider>
      <Box>
        <Switch
          label="Try some switch"
          labelProps={{ labelPlacement: 'end' }}
          {...args}
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
