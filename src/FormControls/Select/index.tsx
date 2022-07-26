import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import { SelectProps, InputLabelProps, SelectChangeEvent } from '@mui/material';
import { Input } from '../InputField';

interface Value {
  label: React.ReactNode;
  value: string | number;
}

export interface CustomSelectProps extends SelectProps {
  label?: React.ReactNode;
  labelProps?: InputLabelProps;
  values: Value[];
  selected: string | number;
}

export const Select: React.FC<CustomSelectProps> = ({
  labelProps,
  label,
  sx,
  values,
  selected,
  onChange,
  ...props
}) => {
  return (
    <>
      {label && (
        <InputLabel sx={{ fontSize: '14px' }} {...labelProps}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        value={selected}
        sx={{ borderRadius: '16px', ...sx }}
        input={<Input />}
        onChange={onChange}
        {...props}
      >
        {values.map(({ label, value }, index) => {
          return (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </>
  );
};
