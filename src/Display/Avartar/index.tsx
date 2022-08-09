import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiAvatarGroup, {
  avatarGroupClasses,
} from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';

export const Avartar = styled(MuiAvatar)(({ theme }) => ({}));

export const AvartarGroup = styled(MuiAvatarGroup)(({ theme }) => ({
  '& .MuiAvatar-root': {
    marginLeft: '-12px',
  },
  alignItems: 'center',
}));
