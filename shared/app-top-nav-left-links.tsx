import Stack from '@mui/material/Stack';

import AppLink from './link/app-link';

export default function AppTopNavLeftLinks() {
  return (
    <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 4 }>
      <AppLink href="games" title="games" />
      <AppLink href="locations" title="locations" />
      <AppLink href="items" title="items" />
    </Stack>
  );
}
