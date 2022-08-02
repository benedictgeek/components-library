import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio } from '.';
import { ThemeProvider } from '../../../ThemeProvider';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Inputs/Radio',
  component: Radio,
};

export default meta;

const Template: Story = (args) => {
  const [selectedValue, setSelectedValue] = useState('one');
  const [values] = useState([
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ]);

  return (
    <ThemeProvider>
      Radio states
      <Box>
        <Radio {...args} />
        <Radio checked {...args} />
        <Radio disabled {...args} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        Sample usage
        {values.map((item, index) => {
          return (
            <Radio
              key={index}
              label={item.label}
              value={item.value}
              checked={selectedValue == item.value}
              onClick={() => setSelectedValue(item.value)}
              {...args}
            />
          );
        })}
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
