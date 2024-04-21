'use client';

import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import type { ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { typography } from './typography';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      typography,
    }),
    [],
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      { children }
    </MuiThemeProvider>
  );
}
