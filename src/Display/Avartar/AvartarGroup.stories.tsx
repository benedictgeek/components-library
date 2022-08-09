import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AvartarGroup, Avartar } from '.';

import { ThemeProvider } from '../../ThemeProvider';
import alexImg from './assets/alex.jpeg';
import julianImg from './assets/julian-wan.jpeg';
import alexanderImg from './assets/alexander-hipp.jpeg';
import mayImg from './assets/may-gauthier.jpeg';

const meta: Meta = {
  title: 'Display/AvartarGroup',
  component: AvartarGroup,
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
          marginBottom: '20px',
        }}
      >
        <AvartarGroup {...args}>
          <Avartar alt="Alex" src={alexImg} />
          <Avartar alt="Julian Wan" src={julianImg} />
          <Avartar alt="Alexander Hipp" src={alexanderImg} />
          <Avartar alt="May Gauthier" src={mayImg} />
        </AvartarGroup>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        <AvartarGroup max={3} {...args}>
          <Avartar alt="Alex" src={alexImg} />
          <Avartar alt="Julian Wan" src={julianImg} />
          <Avartar alt="Alexander Hipp" src={alexanderImg} />
          <Avartar alt="May Gauthier" src={mayImg} />
        </AvartarGroup>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        <AvartarGroup
          total={20}
          componentsProps={{
            additionalAvatar: {
              style: { backgroundColor: 'grey', fontSize: '12px' },
            },
          }}
          {...args}
        >
          <Avartar alt="Alex" src={alexImg} />
          <Avartar alt="Julian Wan" src={julianImg} />
          <Avartar alt="Alexander Hipp" src={alexanderImg} />
          <Avartar alt="May Gauthier" src={mayImg} />
        </AvartarGroup>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
