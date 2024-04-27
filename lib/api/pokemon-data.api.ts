import type { PokemonData } from '@/shared/models/list';
import { POKE_API_URL, FIREBASE_API_URL } from '@/config-global';
import type { PokemonSingleDetail, PokemonSingleEncounter } from '@/shared/models/pokemon';
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

export async function getSinglePokemon(id: string): Promise<PokemonSingleDetail> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }

  const pokemonDetailResponse = await fetch(`${POKE_API_URL}pokemon/${id}`, { next: { tags: [`pokemon-detail-${id}`] } });
  const pokemonDetail: PokemonSingleDetail = await pokemonDetailResponse.json();
  return pokemonDetail;
}

export async function getSinglePokemonLocationEncounter(id: string): Promise<PokemonSingleEncounter[]> {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }

  const pokemonDetailEncounterResponse = await fetch(`${POKE_API_URL}pokemon/${id}/encounters`, { next: { tags: [`pokemon-detail-${id}-encounters`] } });
  const pokemonDetailEncounter: PokemonSingleEncounter[] = await pokemonDetailEncounterResponse.json();
  return pokemonDetailEncounter;
}
