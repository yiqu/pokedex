import { Link } from 'next-view-transitions';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function NotFoundSettings() {
  return (
    <Stack mt={ 3 } spacing={ 2 }>
      <Typography variant="h4">Settings Page Not Found</Typography>
      <Typography variant='body1'>
        Uh-oh! It looks like the wild Pokémon you were searching for couldn&apos;t be found in this region. Please try
        again later or explore another area to encounter new Pokémon! Trainer, keep exploring and catching &apos;em all!
      </Typography>
      <Link href="/">Return Home</Link>
    </Stack>
  );
}
