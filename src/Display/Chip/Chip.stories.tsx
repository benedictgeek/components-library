import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chip } from '.';
import { Box } from '@mui/material';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Display/Chip',
  component: Chip,
  //   argTypes: {},
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
        }}
      >
        <Chip label="My chip label" {...args} onDelete={null} />
        <Chip
          label="Deletable chip"
          onDelete={() => console.log('delete chip')}
          {...args}
        />
        <Chip
          label="Custom delete icon"
          onDelete={() => console.log('delete chip')}
          deleteIcon={<ThumbUpAlt />}
          {...args}
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
