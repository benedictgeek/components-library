import React, { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface TypographyProps {
  children: ReactNode;
}

export const Header1: FC<TypographyProps> = ({ children }) => {
  return <Typography variant="h1">{children}</Typography>;
};
