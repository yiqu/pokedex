import Image from 'next/image';
import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { POKEMON_SPRITE_API_URL } from '@/config-global';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ListPokemonAvatar from './list-avatar';
import FavoritePokemonButton from './favorite-pokemon';

interface PokemonSimpleProps {
  name: string;
  url?: string;
  favorite?: boolean;
  useAnimateButton?: boolean;
  scrollOnNavigate?: boolean;
  index?: string;
}
export default function PokemonSimple({
  name,
  url,
  favorite,
  useAnimateButton,
  scrollOnNavigate = true,
  index: listIndex
}: PokemonSimpleProps) {

  let index: string | undefined = url ? url.split('/').filter(Boolean).pop() : '';

  if (listIndex) {
    index = listIndex.toString();
  }
  
  const urlLink = `/pokemon/${name}${URL_ID_NAME_SEPARATOR}${index}`;

  if (index === undefined) {
    return null;
  }

  return (
    <Stack direction="row" justifyContent="start" alignItems="start">
      <Stack direction="row" spacing={ 1 } justifyContent="start" alignItems="center">
        <FavoritePokemonButton
          pokemonName={ name }
          isFavorite={ !!favorite }
          pokemonIndex={ +index }
          useAnimate={ useAnimateButton }
        />

        <Stack direction="row" spacing={ 1 } justifyContent="start" alignItems="center">
          <ListPokemonAvatar name={ name } id={ +index }>
            <Image src={ `${POKEMON_SPRITE_API_URL}${index}.png` } alt={ name } width={ 70 } height={ 70 } />
          </ListPokemonAvatar>

          <Stack direction="column">
            <AppLink
              href={ urlLink }
              title={ <Typography variant="body2">{ startCase(name) }</Typography> }
              scroll={ scrollOnNavigate }
            />
            <Typography variant="caption">#{ index }</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
