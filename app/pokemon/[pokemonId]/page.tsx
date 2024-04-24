import startCase from 'lodash/startCase';
import type { Metadata, ResolvingMetadata } from 'next';
import { POKEMON_SPRITE_API_URL } from '@/config-global';
import type { PageProps } from '@/shared/models/page.models';
import { getSinglePokemon } from '@/lib/api/pokemon-data.api';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LineWeightIcon from '@mui/icons-material/LineWeightTwoTone';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeightTwoTone';

export async function generateMetadata(
  { params, searchParams }: PageProps<{ pokemonId: string }>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { name, id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);
  const previousTitle = (await parent).title?.absolute || '';

  return {
    title: `${startCase(name)} | ${previousTitle}`,
    openGraph: {
      images: [`${POKEMON_SPRITE_API_URL}${id}.png`],
      title: `${startCase(name)} | ${previousTitle}`,
    },
    description: `Pokemon detail for ${startCase(name)}`,
  };
}

export default async function PokemonDetails({ params }: PageProps<{ pokemonId: string }>) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);
  const pokemonDetailReponse = await getSinglePokemon(id);

  return (
    <Box width="100%">
      <Stack direction="column">
        <Stack direction="row" spacing={ 2 }>
          <Stack direction="row" justifyContent="start" alignItems="center">
            <LineWeightIcon fontSize='small' />
            <Typography>Height: { pokemonDetailReponse.height }</Typography>
          </Stack>
          
          <Stack direction="row" justifyContent="start" alignItems="center">
            <MonitorWeightIcon fontSize='small' />
            <Typography>Weight: { pokemonDetailReponse.weight }</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
