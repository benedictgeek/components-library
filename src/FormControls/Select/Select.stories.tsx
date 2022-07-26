import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '.';
import { ThemeProvider } from '../../ThemeProvider';
import { Box, SelectChangeEvent } from '@mui/material';

const meta: Meta = {
  title: 'Select',
  component: Select,
};

export default meta;

const Template: Story = (args) => {
  const [selectedValue, setSelectedValue] = useState('one');

  const handleChange = (event: { target: { value: string } }) => {
    return setSelectedValue(event.target.value );
  };
  const [values] = useState([
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ]);

  return (
    <ThemeProvider>
      <Select
        selected={selectedValue}
        values={values}
        onChange={(e) => handleChange(e)}
        {...args}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
