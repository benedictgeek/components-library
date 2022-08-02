import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/material/Box';
import { Button } from '.';
import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Inputs/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Default btn clicked' },
    children: {
      defaultValue: 'My button',
    },
  },
};

export default meta;

const Template: Story = (args) => (
  <ThemeProvider>
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Button sx={{ m: 1 }} variant="contained" {...args} />
      <Button sx={{ m: 1 }} variant="outlined" {...args} />
      <Button sx={{ m: 1 }} variant="text" {...args} />
    </Box>
  </ThemeProvider>
);

export const Default = Template.bind({});
