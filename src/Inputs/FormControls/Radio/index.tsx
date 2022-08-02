import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiRadio, { RadioProps } from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CustomControlLabel, CustomControlProps } from '../Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)<CustomControlProps>(
  ({ theme, backgroundColor }) => ({
    backgroundColor: backgroundColor || theme.palette.primary.main,
    //   backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      // backgroundColor: '#106ba3',
      backgroundColor: alpha(
        backgroundColor || theme.palette.primary.main,
        0.8
      ),
    },
  })
);

export interface CustomRadioProps extends RadioProps {
  label?: React.ReactNode;
  labelProps?: CustomControlLabel;
  /**
   * Override the control background color
   */
  backgroundColor?: string;
}

export const Radio: React.FC<CustomRadioProps> = ({
  label,
  labelProps,
  backgroundColor,
  ...props
}) => {
  return (
    <FormControlLabel
      label={label}
      style={{
        margin: 0,
      }}
      {...labelProps}
      control={
        <MuiRadio
          sx={{
            padding: `5px 5px 5px ${
              labelProps?.labelPlacement == 'start' ? '5px' : 0
            }`,
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          color="primary"
          checkedIcon={<BpCheckedIcon backgroundColor={backgroundColor} />}
          icon={<BpIcon />}
          {...props}
        />
      }
    />
  );
};
