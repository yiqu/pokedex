import { getPokemonListUrl } from '@/shared/utils';
import { FIREBASE_API_URL } from '@/config-global';
import type { PokemonData, PokemonSimple, PokemonListResponse } from '@/shared/models/list';

import Stack from '@mui/material/Stack';

import PokemonSimpleDisplay from './simple';

const pokemonDataUrl = `${FIREBASE_API_URL}next/pokemon.json`;

export default async function PokemonList() {
  // sequential fetch
  // const pokemons = await getPokemonList();
  // const pokemonData = await getPokemonData();

  // parallel fetch
  const pokemonListData = getPokemonList();
  const pokemonDataData = getPokemonData();
  const [pokemons, pokemonData] = await Promise.all([pokemonListData, pokemonDataData]);

  const pokemonWithFavoriteStatus = pokemons.results.map((pokemon: PokemonSimple) => {
    const { name } = pokemon;
    let favorite: boolean = false;
    if (pokemonData) {
      favorite = pokemonData[name] ? pokemonData[name].isFavorite : false;
    }
    return {
      ...pokemon,
      favorite,
    };
  });

  const resultWithFavorites: PokemonListResponse = {
    ...pokemons,
    results: pokemonWithFavoriteStatus,
  };

  // const [optimisticState, addOptimistic] = useOptimistic(
  //   resultWithFavorites.results,
  //   (currentState: PokemonSimple[], optimisticValue: PokemonSimple) => {
  //     return [...currentState, optimisticValue];
  //   },
  // );

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
      { resultWithFavorites.results.map((pokemon: PokemonSimple, index: number) => {
        return <PokemonSimpleDisplay key={ pokemon.name } { ...pokemon } index={ index + 1 } />;
      }) }
    </Stack>
  );
}

async function getPokemonList(): Promise<PokemonListResponse> {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const pokemonsResponse = await fetch(getPokemonListUrl(0, 40), { next: { tags: ['pokemon-list'] } });
  const pokemons: PokemonListResponse = await pokemonsResponse.json();
  return pokemons;
}

async function getPokemonData(): Promise<PokemonData> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }

  const pokemonDataResponse = await fetch(pokemonDataUrl, { next: { tags: ['pokemon-data'] } });
  const pokemonData = await pokemonDataResponse.json();
  return pokemonData;
}
