import { POKE_API_URL } from '@/config-global';
import { getPokemonListUrl } from '@/shared/utils';
import type { PokemonGameSimple } from '@/shared/models/pokemon';
import type { PokeApiXhrResponse, PokemonListResponse } from '@/shared/models/list';

export async function getPokemonList(): Promise<PokemonListResponse> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }

  const pokemonsResponse = await fetch(getPokemonListUrl(0, 100), { next: { tags: ['pokemon-list'] } });
  const pokemons: PokemonListResponse = await pokemonsResponse.json();
  return pokemons;
}

export async function getGameList(
  offset: number = 0,
  limit: number = 100,
): Promise<PokeApiXhrResponse<PokemonGameSimple>> {
  const gamesDataResponse = await fetch(`${POKE_API_URL}version??offset=${offset}&limit=${limit}`, {
    next: { tags: ['pokemon-games'] },
  });
  const gamesData = await gamesDataResponse.json();
  return gamesData;
}
