import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
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
    </Stack>
  );
}

export default Favorites;
