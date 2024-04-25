import { getPokemonListUrl } from '@/shared/utils';
import type { PokemonListResponse } from '@/shared/models/list';

export async function getPokemonList(): Promise<PokemonListResponse> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }

  const pokemonsResponse = await fetch(getPokemonListUrl(0, 100), { next: { tags: ['pokemon-list'] } });
  const pokemons: PokemonListResponse = await pokemonsResponse.json();
  return pokemons;
}
