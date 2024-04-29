import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
import DateDisplay from '@/shared/date/date-display';
import FavoritePokemons from '@/components/favorites/pokemons/favorite-pokemons';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Favorites() {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Typography variant="h4">Past and Current Favorites</Typography>
      <Suspense fallback={ <PokemonListLoading /> }>
        <FavoritePokemons useAnimateButton />
      </Suspense>
      <Stack direction="row" justifyContent="end" width="100%">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}

export default Favorites;
