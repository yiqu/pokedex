import { Suspense } from 'react';
import type { PageProps } from '@/shared/models/page.models';
import { PokemonDetailsSpritesLoading } from '@/shared/loadings';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import PokemonDetailsSprites from '@/components/pokemon/sprites/pokemon-details-sprites';

import Box from "@mui/material/Box";

export default function PokemonDetailsSpritesSlot({ params }: PageProps<{ pokemonId: string }>) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <Box width="100%">
      <Suspense fallback={ <PokemonDetailsSpritesLoading /> }>
        <PokemonDetailsSprites id={ id } />
      </Suspense>
    </Box>
  );
}
