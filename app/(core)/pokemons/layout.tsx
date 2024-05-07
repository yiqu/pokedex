import type { Metadata } from 'next/types';

import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: 'Pokemons | Pokedex',
  description: "Pokemons' list",
};

export default function PokemonsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Stack width="100%">{ children }</Stack>;
}
