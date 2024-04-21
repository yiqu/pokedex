import type { Metadata } from 'next';
import ThemeProvider from '@/themes';
import { Inter } from 'next/font/google';
import AppLayout from '@/shared/app-layout';
//import { ViewTransitions } from 'next-view-transitions';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex',
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
      <body className={ inter.className }>
        <AppRouterCacheProvider options={ { enableCssLayer: false } }>
          <ThemeProvider>
            <AppLayout>{ children }</AppLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
    // </ViewTransitions>
  );
}
