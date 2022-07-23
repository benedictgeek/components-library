import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Button = styled(MuiButton)(
  ({ theme, variant, color = 'primary', sx, style }) => {
    console.log(sx, style);
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
