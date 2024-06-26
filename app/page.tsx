import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
import DateDisplay from '@/shared/date/date-display';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

import PokemonList from '../components/home/list';
import PokemonListTitle from '../components/home/title';
import PokemonListAllCount from '../components/home/all-count';

//export const revalidate = 60;

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
      <Stack direction="row" justifyContent="end" width="100%">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}
