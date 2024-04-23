import Image from 'next/image';
import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { POKEMON_SPRITE_API_URL } from '@/config-global';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FavoritePokemonButton from './favorite-pokemon';

interface PokemonSimpleProps {
  name: string;
  url?: string;
  index: number;
  favorite?: boolean;
}
export default function PokemonSimple({ name, url, index, favorite }: PokemonSimpleProps) {
  const urlLink = `/pokemon/${name}${URL_ID_NAME_SEPARATOR}${index}`;

  return (
    <Stack direction="row" justifyContent="start" alignItems="start">
      <Stack direction="row" spacing={ 1 } justifyContent="start" alignItems="center">
        <Image src={ `${POKEMON_SPRITE_API_URL}${index}.png` } alt={ name } width={ 70 } height={ 70 } />
        <Stack direction="column">
          <AppLink href={ urlLink } title={ <Typography variant="body2">{ startCase(name) }</Typography> } />
          <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
            <FavoritePokemonButton pokemonName={ name } isFavorite={ !!favorite } pokemonIndex={ index } />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
