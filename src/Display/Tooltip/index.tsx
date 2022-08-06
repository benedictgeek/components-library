import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiTooltip, {
  TooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
    marginTop: '5px !important',
  },
}));
