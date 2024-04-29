import { format } from 'date-fns';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function DateDisplay() {
  const result: string = format(new Date(), 'MM/dd/yyyy hh:mm:ss a');

  return (
    <Stack>
      <Typography variant="caption">Generated on: { result }</Typography>
    </Stack>
  );
}
