import { Suspense } from 'react';
import type { PageProps } from '@/shared/models/page.models';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import PokemonDetailsSprites from '@/components/pokemon/sprites/pokemon-details-sprites';
import PokemonDetailsDefaultSprite from '@/components/pokemon/sprites/pokemon-details-default-sprite';
import PokemonDetailsSpritesShowMore from '@/components/pokemon/sprites/pokemon-details-sprite-show-more';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

export default function PokemonDetailsSpritesSlot({ params }: PageProps<{ pokemonId: string }>) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <Box width="100%" overflow="hidden">
      <Stack direction="column" width="100%" justifyContent="start" spacing={ 2 } px="1rem" pt="1rem">
        <Suspense fallback={ <Skeleton variant="rectangular" width="100%" height="212px" /> }>
          <PokemonDetailsDefaultSprite id={ id } />
        </Suspense>
        <PokemonDetailsSpritesShowMore>
          <Suspense fallback={ <Skeleton variant="rectangular" width="100%" height="20rem" /> }>
            <PokemonDetailsSprites id={ id } />
          </Suspense>
        </PokemonDetailsSpritesShowMore>
      </Stack>
    </Box>
  );
}
