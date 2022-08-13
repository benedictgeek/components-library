import React, { useState, MouseEvent, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { styled, alpha } from '@mui/material/styles';
import MuiMenu, { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import MenuItem, {
  MenuItemProps as MuIMenuItemProps,
} from '@mui/material/MenuItem';

const StyledMenuList = styled(
  (
    props: MuiMenuProps & { menuactivecolor?: string; menuhovercolor?: string }
  ) => (
    <MuiMenu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  )
)(({ theme, menuactivecolor, menuhovercolor }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      // '& .MuiSvgIcon-root': {
      //   fontSize: 18,
      //   color: theme.palette.text.secondary,
      //   marginRight: theme.spacing(1.5),
      // },
      '&:active': {
        backgroundColor:
          menuactivecolor ||
          alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
      },
      '&:hover': {
        backgroundColor: menuhovercolor || '',
      },
    },
  },
}));

export interface MenuItemProps {
  item: ReactNode;
  ItemMenuProps?: MuIMenuItemProps;
}

export interface MenuProps extends Omit<MuiMenuProps, 'open' | 'anchorEl'> {
  children?: ReactNode;
  items: MenuItemProps[];
  menuactivecolor?: string;
  menuhovercolor?: string;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClick: (event: MouseEvent<HTMLElement>) => any;
  handleClose: (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown' | 'menuClick'
  ) => any;
}

export const Menu = ({
  children,
  items,
  menuactivecolor,
  menuhovercolor,
  anchorEl,
  open,
  handleClick,
  handleClose,
  ...props
}: MenuProps) => {
  const [menuUID] = React.useState(() => uuidv4());

  return (
    <div>
      <div onClick={handleClick} style={{ width: 'fit-content' }}>
        {children}
      </div>
      <StyledMenuList
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        menuactivecolor={menuactivecolor}
        menuhovercolor={menuhovercolor}
        {...props}
      >
        {items.map(({ item, ItemMenuProps }, index) => {
          return (
            <MenuItem
              key={menuUID + index}
              onClick={() => handleClose({}, 'menuClick')}
              {...ItemMenuProps}
            >
              {item}
            </MenuItem>
          );
        })}
      </StyledMenuList>
    </div>
  );
};
