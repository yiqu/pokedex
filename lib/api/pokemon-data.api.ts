import { FIREBASE_API_URL } from '@/config-global';
import type { PokemonData } from '@/shared/models/list';
const pokemonDataUrl = `${FIREBASE_API_URL}next/pokemon.json`;

export async function getPokemonData(): Promise<PokemonData> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }

  const pokemonDataResponse = await fetch(pokemonDataUrl, { next: { tags: ['pokemon-data'] } });
  const pokemonData = await pokemonDataResponse.json();
  return pokemonData;
}
