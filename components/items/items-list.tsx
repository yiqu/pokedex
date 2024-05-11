import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import ImageClient from '@/shared/image/ClientImage';
import { ITEM_SPRITE_API_URL } from '@/config-global';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';
import { LIMIT_SIZE, getItemsList } from '@/lib/api/items.api';
import type { PokemonGameSimple } from '@/shared/models/pokemon';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ListPokemonAvatar from './list-avatar';

export default async function ItemsList({ page }: { page: string }) {
  const offset = (parseInt(page) - 1) * LIMIT_SIZE;
  const items = await getItemsList(offset, LIMIT_SIZE);

  if (!items || items?.results.length === 0) {
    return <Stack>No items found</Stack>;
  }

  return (
    <Stack direction="column" spacing={ 1.5 }>
      { items.results.map((item: PokemonGameSimple, index) => {
        const urlLink = `/items/${item.name}${URL_ID_NAME_SEPARATOR}${index}`;

        return (
          <Stack key={ item.url } direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
            <ListPokemonAvatar name={ item.name } id={ +index }>
              <ImageClient srcUrl={ `${ITEM_SPRITE_API_URL}${item.name}.png` } />
            </ListPokemonAvatar>

            <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
              <AppLink
                href={ urlLink }
                title={ <Typography variant="body2">{ startCase(item.name) }</Typography> }
                scroll={ true }
              />
            </Stack>
          </Stack>
        );
      }) }
    </Stack>
  );
}
