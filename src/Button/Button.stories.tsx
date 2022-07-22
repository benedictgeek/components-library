import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '.';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button>My default</Button>;
export const Secondary = () => <Button color='secondary'>Secondary btn</Button>;
