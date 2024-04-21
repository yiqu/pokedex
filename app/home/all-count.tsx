import { getPokemonListUrl } from '@/shared/utils';
import type { PokemonListResponse } from '@/shared/models/list';

import Typography from "@mui/material/Typography";

export default async function PokemonListAllCount() {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  const totalPokemonsResponse = await fetch(getPokemonListUrl(0, 1));
  const pokemonsCount: PokemonListResponse = await totalPokemonsResponse.json();

  return <Typography variant='h4'>({ pokemonsCount.count })</Typography>;
}
