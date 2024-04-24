import { Suspense } from 'react';
import type { PageProps } from '@/shared/models/page.models';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import PokemonDetailsLocationAreaCounter from '@/components/pokemon/location-area/location-area-counter';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function PokemonDetailsLocationArea({ params }: PageProps<{ pokemonId: string }>) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <Stack direction="column" width="100%">
      <Divider textAlign="center">
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 } width="100%">
          <Typography variant="h5">Location Encounters</Typography>
          <Suspense fallback={ <Skeleton variant="rounded" width="2rem" /> }>
            <PokemonDetailsLocationAreaCounter id={ id } />
          </Suspense>
        </Stack>
      </Divider>
    </Stack>
  );
}
