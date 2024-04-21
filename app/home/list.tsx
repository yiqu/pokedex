import { getPokemonListUrl } from '@/shared/utils';
import type { PokemonSimple, PokemonListResponse } from '@/shared/models/list';

import Stack from '@mui/material/Stack';

import PokemonSimpleDisplay from './simple';

export default async function PokemonList() {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  const pokemonsResponse = await fetch(getPokemonListUrl(0, 40), { next: { tags: ['pokemon-list'] } });
  const pokemons: PokemonListResponse = await pokemonsResponse.json();

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
      { pokemons.results.map((pokemon: PokemonSimple, index: number) => {
        return <PokemonSimpleDisplay key={ pokemon.name } { ...pokemon } index={ index+1 } />;
      }) }
    </Stack>
  );
}
