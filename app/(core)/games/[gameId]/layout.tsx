import { getGameList } from '@/lib/api/pokemon.api';
import DateDisplay from '@/shared/date/date-display';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';
import type { PokeApiXhrResponse } from '@/shared/models/list';
import type { PokemonGameSimple } from '@/shared/models/pokemon';

import Stack from '@mui/material/Stack';

export async function generateStaticParams() {
  const gamesData: PokeApiXhrResponse<PokemonGameSimple> = await getGameList();
  const games = gamesData.results.map((res) => {
    return {
      gameId: `${res.name}${URL_ID_NAME_SEPARATOR}${res.url.split('/').slice(-2)[0]}`,
    };
  });
  // eslint-disable-next-line no-console
  // static for first 5 items
  return games.splice(0, 5);
}

// force the page to be server-side rendered with dynamic params
export const dynamicParams = true;

function GameDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      { children }
      <Stack direction="row" justifyContent="end" width="100%">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}

export default GameDetailLayout;
