/* eslint-disable perfectionist/sort-imports */
// global has to be first or it will cause load warnings
// https://github.com/vercel/next.js/discussions/49607
import './globals.css';
import type { Metadata } from 'next';
import ThemeProvider from '@/themes';
import AppLayout from '@/shared/app-layout';

//import { ViewTransitions } from 'next-view-transitions';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { MotionLazy } from '@/shared/animate/motion-lazy';

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Pokemons | Pokedex',
  description: 'Discover all the Pokémon in the world!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ViewTransitions>
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={ { enableCssLayer: false } }>
          <ThemeProvider>
            <MotionLazy>
              <AppLayout>{ children }</AppLayout>
            </MotionLazy>
          </ThemeProvider>
        </AppRouterCacheProvider>
        { process.env.NODE_ENV === 'production' && <Analytics /> }
      </body>
    </html>
    // </ViewTransitions>
  );
}
