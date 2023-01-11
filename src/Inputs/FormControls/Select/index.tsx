import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { Input } from '../InputField';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import Box from '@mui/material/Box';
import { SelectProps, InputLabelProps } from '@mui/material';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import ArrowUp from '@mui/icons-material/ArrowDropUp';

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
  selected = '',
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
        // input={<Input />}
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

export const SearchableSelect: React.FC<CustomSelectProps> = ({
  labelProps,
  label,
  sx,
  values,
  selected = '',
  onChange,
  ...props
}) => {
  const [inputBox, setInputBox] = React.useState<DOMRect | undefined>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const inputRect = inputRef?.current?.getBoundingClientRect();
    setInputBox(inputRect);
  }, [inputRef]);

  return (
    <>
      {label && (
        <InputLabel sx={{ fontSize: '14px' }} {...labelProps}>
          {label}
        </InputLabel>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Input
          endIcon={<ArrowDown />}
          InputProps={{ readOnly: true }}
          ref={inputRef}
        />
        <div
          // ref={inputRef}
          style={{
            width: `${inputBox?.width}px`,
            position: 'absolute',
          }}
        >
          {values.map(({ label, value }, index) => {
            return (
              <MenuItem key={index} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </div>
      </Box>
    </>
  );
};
