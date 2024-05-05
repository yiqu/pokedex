import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { getLocationList } from '@/lib/api/pokemon.api';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function LocationsListComponent() {
  const locations = await getLocationList();
  const locationsData = locations?.results;

  if (!locationsData) {
    return <Box>No locations found</Box>;
  }

  return (
    <Stack spacing={ 1 }>
      { locationsData.map((location) => {
        const index = location.url.split('/').filter(Boolean).pop();
        const urlLink = `/pokemon/${location.name}${URL_ID_NAME_SEPARATOR}${index}`;

        return (
          <Stack key={ location.url } direction="row" justifyContent="start" alignItems="center">
            <Stack direction="column">
              <AppLink
                href={ urlLink }
                title={ <Typography variant="body2">{ startCase(location.name) }</Typography> }
                scroll={ true }
              />
              <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
              </Stack>
            </Stack>
          </Stack>
        );
      }) }
    </Stack>
  );
}
