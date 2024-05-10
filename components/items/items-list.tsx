import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';
import { LIMIT_SIZE, getItemsList } from '@/lib/api/items.api';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function ItemsList() {
  const items = await getItemsList(0, LIMIT_SIZE);

  if (!items || items?.results.length === 0) {
    return <Stack>No items found</Stack>;
  }

  return (
    <Stack direction="column" spacing={ 1.5 }>
      { items.results.map((item, index) => {
        const urlLink = `/items/${item.name}${URL_ID_NAME_SEPARATOR}${index}`;
        return (
          <Stack key={ item.url } direction="row" justifyContent="start" alignItems="center">
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
              <AppLink
                href={ urlLink }
                title={ <Typography variant="body2">{ startCase(item.name) }</Typography> }
                scroll={ true }
              />
            </Stack>
          </Stack>
        );
      }) }
    </Stack>
  );
}
