import Stack from '@mui/material/Stack';

import AppLink from './link/app-link';

export default function AppTopNavLeftLinks() {
  return (
    <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 4 }>
      <AppLink href="favorites" title="Favorites" />
      <AppLink href="games" title="Games" />
      <AppLink href="locations" title="Locations" />
      <AppLink href="items" title="Items" />
    </Stack>
  );
}
