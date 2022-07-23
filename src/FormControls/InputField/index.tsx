import { styled, alpha } from '@mui/material/styles';
import {
  InputBase as MuiInput,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
} from '@mui/material';
import React, { FC, ReactNode } from 'react';

const StyledInput = styled(MuiInput)(({ theme }) => ({
  'label + &': {
    marginTop: '5px',
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#ebebed',
    // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    // width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      backgroundColor: '#fcfcfb',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      fontSize: '12px',
    },
  },
}));

export interface InputFieldProps extends InputBaseProps {
  label?: ReactNode;
  labelProps?: InputLabelProps;
}

export const Input: FC<InputFieldProps> = ({ label, labelProps, ...props }) => {
  return (
    <div>
      {label && (
        <InputLabel sx={{ fontSize: '14px' }} {...labelProps}>
          {label}
        </InputLabel>
      )}
      <StyledInput {...props} />
    </div>
  );
};
