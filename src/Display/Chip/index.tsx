import * as React from 'react';
import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

export const Chip = styled(MuiChip)(({ theme, color }) => ({
  borderRadius: '20px',
  '&:active': {
    boxShadow: 'none',
  },
  '&:hover': {
    //@ts-ignore
    backgroundColor: theme.palette[color]?.main || "#00000014",
  },
}));
