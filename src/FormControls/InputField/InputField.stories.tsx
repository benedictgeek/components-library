import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputFieldProps } from '.';
import { ThemeProvider } from '../../ThemeProvider';
import { Box, InputAdornment, SelectChangeEvent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const meta: Meta<InputFieldProps> = {
  title: 'InputField',
  component: Input,
};

export default meta;

const Template: Story<InputFieldProps> = (args) => {
  return (
    <ThemeProvider>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 3,
        }}
      >
        <Input
          label="Default input"
          required
          placeholder="Placeholder text"
          fullWidth
          {...args}
        />
        <Input
          label="Disabled"
          value={'olushola251@gmail.com'}
          disabled
          fullWidth
          {...args}
        />
        <Input label="With preset value" value={'Some value'} fullWidth />
        <Input
          label="Disabled"
          value={'olushola251@gmail.com'}
          disabled
          fullWidth
          {...args}
        />
      </Box>
    </ThemeProvider>
  );
};

const AdornTemplate: Story<InputFieldProps> = (args) => {
  return (
    <ThemeProvider>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 3,
        }}
      >
        <Input
          label="Search input"
          required
          placeholder="Placeholder text"
          fullWidth
          startIcon={<SearchIcon />}
          {...args}
        />

        <Input
          label="End icon"
          required
          placeholder="Placeholder text"
          fullWidth
          endIcon={<EyeIcon />}
          {...args}
        />
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
export const Adonrments = AdornTemplate.bind({});
