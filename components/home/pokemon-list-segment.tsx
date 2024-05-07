import useSWR from 'swr';
import PokemonListLoading from '@/shared/loadings';
import { getPokemonListUrl } from '@/shared/utils';
import { swrFetcherDefault } from '@/shared/swr/fetcher';
import { pokemonDataUrl } from '@/lib/api/pokemon-data.api';
import type { PokemonData, PokemonSimple, PokemonListResponse } from '@/shared/models/list';

import Stack from '@mui/material/Stack';

import PokemonSimpleDisplay from './simple';

const limitCount = 50;

export default function PokemonListSegment({ pageNumber }: { pageNumber: number }) {
  const fetchUrl = getPokemonListUrl(pageNumber * limitCount, limitCount);

  const { data: pokemons, error: pokemonsError } = useSWR<PokemonListResponse>(
    fetchUrl,
    swrFetcherDefault.bind(null, []),
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  const { data: pokemonData, error: pokemonDataError } = useSWR<PokemonData>(
    pokemonDataUrl,
    swrFetcherDefault.bind(null, []),
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  if (pokemonsError || pokemonDataError) {
    return <Stack>Error loading data...</Stack>;
  }

  if (!pokemons || !pokemonData) {
    return <PokemonListLoading />;
  }

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

  return (
    <>
      { resultWithFavorites.results.map((pokemon: PokemonSimple, index: number) => {
        return <PokemonSimpleDisplay key={ pokemon.name } { ...pokemon } />;
      }) }
    </>
  );
}
