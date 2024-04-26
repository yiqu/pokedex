import startCase from 'lodash/startCase';
import type { Metadata } from 'next/types';
import { Suspense, type ReactNode } from 'react';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from "@mui/material/Skeleton";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export const metadata: Metadata = {
  title: 'Pokemon Detail | Pokedex',
  description: 'Pokemon detail',
};

export default function PokemonDetailLayout({
  children,
  params,
  sprites,
  gameindices,
  locationarea,
}: {
  params: { pokemonId: string };
  children: React.ReactNode;
  sprites: ReactNode;
  gameindices: React.ReactNode;
  locationarea: React.ReactNode;
}) {
  const { name, id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 3 } my={ 2 }>
      <Stack direction="row" spacing={ 1 }>
        <Typography variant="h4" color="text.disabled">
          #{ id }
        </Typography>
        <Typography variant="h4">{ startCase(name) }</Typography>
      </Stack>

      <Suspense fallback={ <Skeleton variant="rectangular" width="12rem" height='21px' /> }>{ children }</Suspense>

      <Box width="100%">
        <Grid container spacing={ 2 }>
          <Grid xs={ 12 } sm={ 12 } md={ 4 }>
            { sprites }
          </Grid>
          <Grid xs={ 12 } sm={ 12 } md={ 8 }>
            <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 4 }>
              { gameindices }
              { locationarea }
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
