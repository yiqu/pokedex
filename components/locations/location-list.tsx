import { getLocationList } from '@/lib/api/pokemon.api';
import { getFavoriteLocations } from '@/lib/api/pokemon-data.api';

import Box from '@mui/material/Box';

import Locations from './locations';

export default async function LocationsListComponent() {
  const locations = await getLocationList();
  const locationFavorites = await getFavoriteLocations();
  const locationsData = locations?.results;

  if (!locationsData) {
    return <Box>No locations found</Box>;
  }

  return <Locations locationsData={ locationsData } favorites={ locationFavorites } />;
}
