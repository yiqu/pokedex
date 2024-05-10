import { Suspense } from 'react';
import { getItemsList } from '@/lib/api/items.api';

import Stack from '@mui/material/Stack';

import DataPaginator from './items-paginator';

export default async function ItemsLayout({ children }: { children: React.ReactNode }) {
  const items = await getItemsList(0, 1);
  const totalCount = items?.count ?? undefined;

  return (
    <Stack direction="column" spacing={ 2 }>
      <Suspense fallback={ <div>loading</div> }>
        <DataPaginator totalCount={ totalCount } />
      </Suspense>

      { children }
    </Stack>
  );
}
