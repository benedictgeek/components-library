import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '.';
import { SearchableSelect } from './searchable';
import { ThemeProvider } from '../../../ThemeProvider';
import { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/material';

const meta: Meta = {
  title: 'Inputs/Select',
  component: Select,
};

export default meta;

const Template: Story = (args) => {
  const [selectedValue, setSelectedValue] = useState('one');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    return setSelectedValue(event.target.value as string);
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
        onChange={handleChange}
        {...args}
      />
    </ThemeProvider>
  );
};

const SearchableTemplate: Story = (args) => {
  const [selectedValue, setSelectedValue] = useState('one');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    return setSelectedValue(event.target.value as string);
  };
  const [values] = useState([
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' },
    // { value: 'three', label: 'Three' },
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' },
    // { value: 'three', label: 'Three' },
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' },
    // { value: 'three', label: 'Three' },
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' },
    // { value: 'three', label: 'Three' },
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' },
    // { value: 'three', label: 'Three' },
    // { value: 'one', label: 'One' },
    // { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ]);

  return (
    <ThemeProvider>
      <Box style={{ marginTop: '0px' }}>
        <SearchableSelect
          selected={selectedValue}
          values={values}
          onChange={handleChange}
          {...args}
        />
        {/* <Select
        selected={selectedValue}
        values={values}
        onChange={handleChange}
        {...args}
      /> */}
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
export const Search = SearchableTemplate.bind({});
