import React, { MouseEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Box } from '@mui/material';
import { MenuItemProps, Menu } from '.';
import { Button } from '../../Inputs/Button';

import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Navigation/Menu',
  component: Menu,
  //   argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (
    event?: {},
    reason?: 'backdropClick' | 'escapeKeyDown' | 'menuClick'
  ) => {
    setAnchorEl(null);
  };

  const items: MenuItemProps[] = [
    {
      item: 'Provide your details',
    },
    {
      item: 'Verifiy your info',
    },
    {
      item: 'Confirm interest',
      ItemMenuProps: { style: { cursor: 'not-allowed' }, onClick: null },
    },
  ];

  return (
    <ThemeProvider>
      <Box sx={{ width: '100%' }}>
        <Menu
          anchorEl={anchorEl}
          {...args}
          handleClick={handleClick}
          handleClose={handleClose}
          items={items}
          open={open}
        >
          <Button>Show menu</Button>
        </Menu>
      </Box>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
