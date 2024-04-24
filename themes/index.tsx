'use client';

import { useMemo } from 'react';
import CustomToaster from '@/shared/custom-toaster';

import CssBaseline from '@mui/material/CssBaseline';
import type { ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue: ThemeOptions = useMemo(
    () => ({
      typography,
      palette: palette('light')
    }),
    [],
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      { children }
      <CustomToaster />
    </MuiThemeProvider>
  );
}
