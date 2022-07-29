import { styled, alpha } from '@mui/material/styles';
import {
  TextField as MuiInput,
  // InputBase as MuiInput,
  TextFieldProps,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
  InputAdornment,
} from '@mui/material';
import React, { FC, ReactNode } from 'react';

const StyledInput = styled(MuiInput)(({ theme }) => ({
  'label + &': {
    marginTop: '5px',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiOutlinedInput-root': {
    // '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#ebebed',
    border: '1px solid #ced4da',
    fontSize: 16,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '& .MuiInputBase-input': {
      '&::placeholder': {
        fontSize: '12px',
      },
    },
  },
  '& .Mui-focused': {
    backgroundColor: '#fcfcfb',
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
  '& .Mui-disabled': {
    cursor: 'not-allowed',
  },
  // '& .css-nlslkq-MuiInputBase-root-MuiOutlinedInput-root': {
  //   paddingLeft: '0px',
  // },
}));

export interface InputFieldProps {
  label?: ReactNode;
  labelProps?: InputLabelProps;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Input = ({
  label,
  labelProps,
  startIcon,
  endIcon,
  ...props
}: TextFieldProps & InputFieldProps) => {
  return (
    <div>
      {label && (
        <InputLabel sx={{ fontSize: '14px' }} {...labelProps}>
          {label}
        </InputLabel>
      )}
      <StyledInput
        variant="outlined"
        {...props}
        InputProps={{
          ...props.InputProps,
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : undefined,
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : undefined,
        }}
      />
    </div>
  );
};
