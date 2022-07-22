import React, { FC, ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

import { Theme } from '@mui/system';

interface ThemeProps {
  children: ReactNode;
  theme?: Theme;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  neutralColor?: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    tertiary: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    tertiary?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    tertiary: true;
  }
}

export const ThemeProvider: FC<ThemeProps> = ({
  children,
  theme,
  primaryColor,
  secondaryColor,
}) => {
  const systemTheme = createTheme({
    palette: {
      primary: {
        main: primaryColor || '#ff0000',
      },
      secondary: {
        main: secondaryColor || '#0000ff',
      },
      tertiary: {
        main: '#fff',
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          //disable touch ripple everwhere
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme || systemTheme}>{children}</MuiThemeProvider>
  );
};
