import type { PokemonSingleEncounter } from '@/shared/models/pokemon';
import { getSinglePokemonLocationEncounter } from '@/lib/api/pokemon-data.api';

import Typography from '@mui/material/Typography';

export default async function PokemonDetailsLocationAreaCounter({ id }: { id: string }) {
  const encounters: PokemonSingleEncounter[] = await getSinglePokemonLocationEncounter(id);
  return <Typography variant="h5">({ encounters.length })</Typography>;
}
