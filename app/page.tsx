import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import PokemonList from './home/list';
import PokemonListTitle from './home/title';
import PokemonListAllCount from './home/all-count';

export default function Home() {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Stack direction="row" spacing={ 0.5 }>
        <PokemonListTitle />
        <Suspense fallback={ <Skeleton width="3rem" /> }>
          <PokemonListAllCount />
        </Suspense>
      </Stack>
      <Suspense fallback={ <PokemonListLoading /> }>
        <PokemonList />
      </Suspense>
    </Stack>
  );
}
