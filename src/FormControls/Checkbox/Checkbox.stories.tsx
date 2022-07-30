import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '.';
import { ThemeProvider } from '../../ThemeProvider';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story = (args) => (
  <ThemeProvider>
    <Box>
      <Checkbox {...args} />
      <Checkbox checked {...args} />
      <Checkbox disabled {...args} />
    </Box>

    <Box>
      <Checkbox label="Labelled checkbox" {...args} />
    </Box>

    <Box>
      <Checkbox
        label="Labelled checkbox with label props applied"
        labelProps={{ labelPlacement: 'start' }}
        {...args}
      />
    </Box>
  </ThemeProvider>
);

export const Default = Template.bind({});
