import React, { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface TypographyProps {
  children: ReactNode;
}

export const Header1: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="h1" component={'h1'}>
      {children}
    </Typography>
  );
};

export const Header2: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="h2" component={'h2'}>
      {children}
    </Typography>
  );
};

export const Header3: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="h3" component={'h3'}>
      {children}
    </Typography>
  );
};

export const Header4: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="h4" component={'h4'}>
      {children}
    </Typography>
  );
};

export const Header5: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="h5" component={'h5'}>
      {children}
    </Typography>
  );
};

export const Header6: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="h6" component={'h6'}>
      {children}
    </Typography>
  );
};

export const Subtitle1: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="subtitle1" component={'p'}>
      {children}
    </Typography>
  );
};

export const Subtitle2: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="subtitle2" component={'p'}>
      {children}
    </Typography>
  );
};

export const Body1: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="body1" component={'p'}>
      {children}
    </Typography>
  );
};

export const Body2: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="body2" component={'p'}>
      {children}
    </Typography>
  );
};

export const Caption: FC<TypographyProps> = ({ children }) => {
  return (
    <Typography variant="caption" component={'p'}>
      {children}
    </Typography>
  );
};
