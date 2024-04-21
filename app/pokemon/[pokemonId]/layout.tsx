import type { Metadata } from 'next/types';
import type { LayoutProps } from '@/shared/models/page.models';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const metadata: Metadata = {
  title: 'Pokemon Detail | Pokedex',
  description: 'Pokemon detail',
};

export default function PokemonDetailLayout({ children, params }: LayoutProps<{ pokemonId: string }>) {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Typography variant="h4">
        <Stack>{ params.pokemonId }</Stack>
      </Typography>

      { children }
    </Stack>
  );
}
