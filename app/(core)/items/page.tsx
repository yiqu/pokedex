import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
import ItemsList from '@/components/items/items-list';
import ItemsListCount from '@/components/items/all-count';
import ItemsLayout from '@/components/items/items-layout';
import type { IPageProps } from '@/shared/models/page.models';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function ItemsPage({ params, searchParams }: IPageProps<{ page: string }>) {
  let { page } = searchParams;

  if (!page || Array.isArray(page)) {
    page = '1';
  }
  
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
          <ItemsList page={ page } />
        </Suspense>
      </ItemsLayout>
    </Stack>
  );
}
