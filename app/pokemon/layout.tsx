import type { Metadata } from 'next/types';

import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: "Pokemon Detail | Pokedex",
  description: "Pokemon detail",
};

export default function PokemonLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Stack>{ children }</Stack>;
}
