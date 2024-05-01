import type { ReactNode } from 'react';
import type { Metadata } from 'next/types';

import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: 'Favorites | Pokedex',
  description: 'Pokemon detail',
};

export default function FavoritesLayout({
  children,
  games,
  pokemons,
}: Readonly<{ children: React.ReactNode; games: ReactNode; pokemons: ReactNode }>) {
  return (
    <Stack>
      { children }
      { games }
      { pokemons }
    </Stack>
  );
}
