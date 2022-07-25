import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiSwitch, { SwitchProps } from '@mui/material/Switch';
import { CustomControlLabel, CustomControlProps } from '../Checkbox';
import { FormControlLabel } from '@mui/material';

const StyledSwitch = styled((props: SwitchProps) => (
  <MuiSwitch focusVisibleClassName=".Mui-focusVisible" {...props} />
))<CustomControlProps>(({ theme, backgroundColor }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: backgroundColor || theme.palette.primary.main,
        // backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    // backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export interface CustomSwitchProps extends SwitchProps {
  label?: React.ReactNode;
  labelProps?: CustomControlLabel;
  /**
   * Override the background color
   */
  backgroundColor?: string;
}

export const Switch: React.FC<CustomSwitchProps> = ({
  label,
  labelProps,
  backgroundColor,
  ...props
}) => {
  const labelplacement = labelProps?.labelPlacement;
  return (
    <FormControlLabel
      label={label}
      style={{
        margin: 0,
      }}
      {...labelProps}
      control={
        <StyledSwitch
          sx={{
            margin: `
            ${labelplacement == 'top' ? '5px' : 0}
          ${labelplacement == 'end' ? '5px' : 0}
          ${labelplacement == 'bottom' ? '5px' : 0}
          ${labelplacement == 'start' ? '5px' : 0}
         `,
          }}
          {...props}
        />
      }
    />
  );
};
