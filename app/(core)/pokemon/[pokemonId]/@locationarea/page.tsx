import { Suspense } from 'react';
import type { PageProps } from '@/shared/models/page.models';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import PokemonDetailsLocationAreaDisplay from '@/components/pokemon/location-area/location-area';
import PokemonDetailsLocationAreaCounter from '@/components/pokemon/location-area/location-area-counter';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function PokemonDetailsLocationArea({ params }: PageProps<{ pokemonId: string }>) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <Stack direction="column" width="100%" spacing={ 3 }>
      <Divider textAlign="left">
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 } width="100%">
          <Typography variant="h5">Location Encounters</Typography>
          <Suspense fallback={ <Skeleton variant="rounded" width="2rem" /> }>
            <PokemonDetailsLocationAreaCounter id={ id } />
          </Suspense>
        </Stack>
      </Divider>
      <Box>
        <Typography variant="body1">
          This Pokémon can be found in the following locations with the corresponding encounter rates.
        </Typography>
        <Typography>
          The average chance is calculated by taking the average of the maximum chance of encountering the Pokémon in the
          location.
        </Typography>
      </Box>
      <Suspense fallback={ <Skeleton variant="rounded" width="100%" height="10rem" /> }>
        <PokemonDetailsLocationAreaDisplay id={ id } />
      </Suspense>
    </Stack>
  );
}
