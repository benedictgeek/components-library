import React, { FC, ReactNode, useEffect } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

import { Theme } from '@mui/system';
import WebFont from 'webfontloader';

interface FontProps {
  name: string;
  title: string;
  link: string;
}

interface ThemeProps {
  children: ReactNode;
  theme?: Theme;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  neutralColor?: string;
  font?: FontProps;
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
  font = {
    name: "'Montserrat', sans-serif",
    title: 'Montserrat',
    link: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  },
}) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [font.name],
        api: font.link,
      },
    });
  }, []);

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
    typography: {
      fontFamily: font.name,
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
