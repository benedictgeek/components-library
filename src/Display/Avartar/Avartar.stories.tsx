import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avartar } from '.';

import { ThemeProvider } from '../../ThemeProvider';
import alexImg from './assets/alex.jpeg';
import julianImg from './assets/julian-wan.jpeg';

const meta: Meta = {
  title: 'Display/Avartar',
  component: Avartar,
  argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: 2,
          marginBottom: '20px',
        }}
      >
        <Avartar alt="Alex" src={alexImg} {...args} />
        <Avartar style={{ backgroundColor: 'blueviolet' }} {...args}>
          S
        </Avartar>
        <Avartar style={{ backgroundColor: 'green' }} {...args}>
          <AssignmentIcon />
        </Avartar>
      </Box>
      <Avartar
        alt="Julian Wan"
        style={{ width: '60px', height: '60px' }}
        src={julianImg}
        {...args}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
