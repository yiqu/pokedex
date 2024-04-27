import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { getGameList } from '@/lib/api/pokemon.api';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';
import type { PokeApiXhrResponse } from '@/shared/models/list';
import type { PokemonGameSimple } from '@/shared/models/pokemon';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function GamesList() {
  const gamesData: PokeApiXhrResponse<PokemonGameSimple> = await getGameList();

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
      { gamesData.results.map((game, index: number) => {
        return (
          <Stack key={ game.url } direction="row" justifyContent="start" alignItems="start">
            <Stack direction="row" spacing={ 1 } justifyContent="start" alignItems="center">
              <Stack direction="column">
                <AppLink
                  href={ `/games/${game.name}${URL_ID_NAME_SEPARATOR}${index + 1}` }
                  title={ <Typography variant="body2">{ startCase(game.name) }</Typography> }
                />

                <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }></Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      }) }
    </Stack>
  );
}
