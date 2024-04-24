import { getSinglePokemon } from '@/lib/api/pokemon-data.api';
import type { PokemonSingleDetail, PokemonSingleGameIndex } from '@/shared/models/pokemon';

import Typography from '@mui/material/Typography';

export default async function PokemonDetailsGameIndicesCounter({ id }: { id: string }) {
  const pokemonDetailReponse: PokemonSingleDetail = await getSinglePokemon(id);
  const indices: PokemonSingleGameIndex[] = pokemonDetailReponse.game_indices;
  return <Typography variant="h5">({ indices.length })</Typography>;
}
