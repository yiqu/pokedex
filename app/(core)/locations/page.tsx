import { Suspense } from 'react';
import PokemonListLoading from '@/shared/loadings';
import LocationListCount from '@/components/locations/all-count';
import LocationsListComponent from '@/components/locations/location-list';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default function LocationsPage() {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Stack direction="row" spacing={ 0.5 }>
        <Typography variant="h4">Locations</Typography>
        <Suspense fallback={ <Skeleton width="3rem" /> }>
          <LocationListCount />
        </Suspense>
      </Stack>
      <Typography variant="caption">Optimistic updated</Typography>
      <Suspense fallback={ <PokemonListLoading /> }>
        <LocationsListComponent />
      </Suspense>
    </Stack>
  );
}
