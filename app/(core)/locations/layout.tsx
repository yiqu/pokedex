import type { Metadata } from 'next/types';

import Stack from '@mui/material/Stack';

export const metadata: Metadata = {
  title: "Locations | Pokedex",
  description: "Locations In Game",
};

export default function LocationsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Stack>{ children }</Stack>;
}
