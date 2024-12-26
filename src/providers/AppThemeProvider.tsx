import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

type CustomFontSize = Record<
  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'huge',
  number
>;
type CustomColor = Record<
  | 'brand'
  | 'gray'
  | 'lightGray'
  | 'midGray'
  | 'bgGray'
  | 'bgLightGray'
  | 'bgDisabledGray'
  | 'notice'
  | 'pinkRed'
  | 'linkBlue'
  | 'aquaBlue'
  | 'appBlue',
  string
>;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    size: CustomFontSize;
  }
  interface TypographyVariantsOptions {
    size?: CustomFontSize;
  }
}
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: CustomColor;
  }
  interface PaletteOptions {
    custom?: CustomColor;
  }
}

const theme = createTheme({
  typography: {
    fontWeightBold: 600,
    size: {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 22,
      xxxl: 24,
      huge: 26,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#0b2a3a',
      light: '#f0f6f8',
    },
    error: {
      main: '#e02828',
    },
    success: {
      main: '#19A939',
    },
    custom: {
      brand: '#cc0000',
      gray: '#546a75',
      lightGray: '#e2e7e6',
      midGray: '#a6a6a6',
      bgGray: '#f3f3f3',
      bgLightGray: '#d9d9d9',
      bgDisabledGray: '#f3f4f4',
      notice: '#e02828',
      pinkRed: '#eb436B',
      linkBlue: '#0063be',
      aquaBlue: '#59b0cd',
      appBlue: '#c0dbe5',
    },
  },
});

export const AppThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
