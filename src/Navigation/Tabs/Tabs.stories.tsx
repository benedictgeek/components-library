import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import { Tab, Tabs } from '.';

import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  //   argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          aria-label="tabs component"
          {...args}
          onChange={handleChange}
        >
          <Tab label="Admins" />
          <Tab label="Members" />
          <Tab label="Others" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
