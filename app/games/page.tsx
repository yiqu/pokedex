import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
import DateDisplay from '@/shared/date/date-display';
import GamesList from '@/components/games/games-list';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function GamesPage() {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Typography variant="h4">Games</Typography>
      <Suspense fallback={ <PokemonListLoading /> }>
        <GamesList />
      </Suspense>
      <Stack direction="row" justifyContent="end" width="100%">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}

export default GamesPage;
