import startCase from 'lodash/startCase';
import DateDisplay from '@/shared/date/date-display';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ItemDetailsPage({ params }: { params: { itemId: string } }) {
  const { name, id } = getIdNameFromIdAndNamePathCombo(params.itemId);

  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 3 } my={ 2 }>
      <Stack direction="row" spacing={ 1 }>
        <Typography variant="h4" color="text.disabled">
          #{ id }
        </Typography>
        <Typography variant="h4">{ startCase(name) }</Typography>
      </Stack>

      <Stack direction="row" justifyContent="end" width="100%">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}
