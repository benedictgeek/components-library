import React, { MouseEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';

import Link from '@mui/material/Link';
import BreadCrumbs, { BreadcrumbsProps } from '.';

import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Navigation/BreadCrumbs',
  component: BreadCrumbs,
  //   argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  const breadcrumbs = [
    <Link underline="hover" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" color="inherit" href="/food" onClick={handleClick}>
      Food
    </Link>,
    <Link
      underline="none"
      color="inherit"
      href="/food/jollof"
      onClick={handleClick}
    >
      Jollof rice
    </Link>,
  ];

  return (
    <ThemeProvider>
      <Box sx={{ width: '100%' }}>
        <BreadCrumbs
          breadcrumbs={breadcrumbs}
          //   activeStyles={{ color: 'red' }}
          {...args}
        ></BreadCrumbs>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
