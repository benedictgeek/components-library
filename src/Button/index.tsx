import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '20px',
  textTransform: 'none',
}));
