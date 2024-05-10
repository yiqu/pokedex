import type { Metadata } from 'next/types';

import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: "Items | Pokedex",
  description: "Items In Game",
};

export default function ItemsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Stack>{ children }</Stack>;
}
