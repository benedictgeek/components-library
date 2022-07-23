import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Button = styled(MuiButton)(
  ({ theme, variant, color = 'primary' }) => {
    return {
      borderRadius: '8px',
      textTransform: 'none',
      '&:hover': {
        background:
          // @ts-ignore
          variant === 'contained' ? theme.palette[color]?.main : 'none',
      },
    };
  }
);
