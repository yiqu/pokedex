import formatInTimeZone from 'date-fns-tz/formatInTimeZone';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function DateDisplay() {
  const fullDate = formatInTimeZone(new Date(), EST_TIME_ZONE, 'MM/dd/yyyy hh:mm:ss a OOOO');
  //const fullDate2 = format(new Date(), 'MM/dd/yyyy hh:mm:ss a OOOO z');
  return (
    <Stack>
      <Typography variant="caption">
        Generated on: { fullDate }
      </Typography>
    </Stack>
  );
}

export const EST_TIME_ZONE = 'America/New_York';
