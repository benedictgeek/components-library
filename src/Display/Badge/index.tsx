import MuiBadge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export const Badge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
