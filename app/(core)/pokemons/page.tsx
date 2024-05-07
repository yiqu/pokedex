import { Suspense } from 'react';
import PokemonList from '@/components/home/list';
import PokemonListTitle from '@/components/home/title';
import PokemonListAllCount from '@/components/home/all-count';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

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
      <PokemonList />
    </Stack>
  );
}
