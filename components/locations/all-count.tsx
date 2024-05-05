import { getLocationList } from '@/lib/api/pokemon.api';

import Typography from '@mui/material/Typography';

export default async function LocationListCount() {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const data = await getLocationList(0, 1);
  if (!data) {
    return 'No data';
  }

  return <Typography variant="h4">({ data.count })</Typography>;
}
