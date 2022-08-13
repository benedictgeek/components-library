import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Button = styled((props: ButtonProps) => {
  return <MuiButton variant="contained" color="primary" {...props} />;
})(({ theme, variant = 'contained', color = 'primary' }) => {
  return {
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
      background:
        // @ts-ignore
        variant === 'contained' ? theme.palette[color]?.main : 'none',
    },
  };
});
