import type { Metadata } from 'next/types';

import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: "Favorites | Pokedex",
  description: "Pokemon detail",
};

export default function FavoritesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Stack>{ children }</Stack>;
}
