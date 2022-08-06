import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip } from '.';
import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Display/Tooltip',
  component: Tooltip,
  argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider>
      <Tooltip title={'I am an hover text'} {...args}>
        <span>Hover Me</span>
      </Tooltip>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
