import { getPokemonListUrl } from '@/shared/utils';
import { FIREBASE_API_URL } from '@/config-global';
import type { PokemonSimple, PokemonListResponse } from '@/shared/models/list';

import Stack from '@mui/material/Stack';

import PokemonSimpleDisplay from './simple';

const pokemonDataUrl = `${FIREBASE_API_URL}next/pokemon.json`;

export default async function PokemonList() {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  const pokemonsResponse = await fetch(getPokemonListUrl(0, 40), { next: { tags: ['pokemon-list'] } });
  const pokemons: PokemonListResponse = await pokemonsResponse.json();

  const pokemonDataResponse = await fetch(pokemonDataUrl, { next: { tags: ['pokemon-data'] } });
  const pokemonData = await pokemonDataResponse.json();

  const pokemonWithFavoriteStatus = pokemons.results.map((pokemon: PokemonSimple) => {
    const { name } = pokemon;
    const favorite: boolean = pokemonData[name] ? pokemonData[name].isFavorite : false;
    return {
      ...pokemon,
      favorite,
    };
  });

  const resultWithFavorites: PokemonListResponse = {
    ...pokemons,
    results: pokemonWithFavoriteStatus,
  };


  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
      { resultWithFavorites.results.map((pokemon: PokemonSimple, index: number) => {
        return <PokemonSimpleDisplay key={ pokemon.name } { ...pokemon } index={ index + 1 } />;
      }) }
    </Stack>
  );
}
