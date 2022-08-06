import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from '.';
import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Display/Badge',
  component: Badge,
  argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider>
      <Badge badgeContent={5} color={'primary'} {...args}>
        Badge
      </Badge>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
