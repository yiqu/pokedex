import { getPokemonList } from '@/lib/api/pokemon.api';
import { getPokemonData } from '@/lib/api/pokemon-data.api';
import type { PokemonSimple, PokemonListResponse } from '@/shared/models/list';

import Stack from '@mui/material/Stack';

import PokemonSimpleDisplay from './simple';

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
