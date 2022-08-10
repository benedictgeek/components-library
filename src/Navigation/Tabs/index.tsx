import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiTabs, { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box, { BoxProps } from '@mui/material/Box';

export interface TabsProps extends Omit<MuiTabsProps, 'indicatorColor'> {
  children?: React.ReactNode;
  value: number;
  indicatorWidth?: number | string;
  BorderProps?: BoxProps;
}

export const Tabs = styled((props: TabsProps) => (
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} {...props.BorderProps}>
    <MuiTabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  </Box>
))(({ theme, indicatorWidth }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: indicatorWidth || 40,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

interface TabProps {
  label: string;
  color?: string;
  selectedColor?: string;
}

export const Tab = styled((props: TabProps) => <MuiTab {...props} />)(
  ({ theme, color, selectedColor }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: color,
    '&.Mui-selected': {
      color: selectedColor,
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

Tab.defaultProps = {
  color: 'rgba(0, 0, 0, 0.7)',
  selectedColor: 'rgb(0, 0, 0)',
};
