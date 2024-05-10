import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
import ItemsList from '@/components/items/items-list';
import ItemsListCount from '@/components/items/all-count';
import ItemsLayout from '@/components/items/items-layout';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function ItemsPage() {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Stack direction="row" spacing={ 0.5 }>
        <Typography variant="h4">Items</Typography>
        <Suspense fallback={ <Skeleton width="3rem" /> }>
          <ItemsListCount />
        </Suspense>
      </Stack>
      <ItemsLayout>
        <Suspense fallback={ <PokemonListLoading /> }>
          <ItemsList />
        </Suspense>
      </ItemsLayout>
    </Stack>
  );
}
