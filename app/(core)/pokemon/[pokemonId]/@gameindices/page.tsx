import { Suspense } from 'react';
import type { PageProps } from '@/shared/models/page.models';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import PokemonDetailsGameIndicesDisplay from '@/components/pokemon/game-indices/game-indices';
import PokemonDetailsGameIndicesCounter from '@/components/pokemon/game-indices/game-indices-counter';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function PokemonDetailsGameIndices({ params }: PageProps<{ pokemonId: string }>) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <Stack direction="column" width="100%" spacing={ 3 }>
      <Divider textAlign="left">
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 0.5 } width="100%">
          <Typography variant="h5">Game Availability</Typography>
          <Suspense fallback={ <Skeleton variant="rounded" width="2rem" /> }>
            <PokemonDetailsGameIndicesCounter id={ id } />
          </Suspense>
        </Stack>
      </Divider>
      <Typography variant="body1">
        This pokemon is available in the following games.
      </Typography>
      <Suspense fallback={ <Skeleton variant="rounded" width="100%" height="543px" /> }>
        <PokemonDetailsGameIndicesDisplay id={ id } />
      </Suspense>
    </Stack>
  );
}
