import { POKE_API_URL } from '@/config-global';
import { getPokemonListUrl } from '@/shared/utils';
import type { PokemonGameSimple } from '@/shared/models/pokemon';
import type {
  PokeApiXhrResponse,
  PokemonListResponse,
  PokemonVersionDetails,
  PokemonVersionGroupDetails,
} from '@/shared/models/list';

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

export async function getGameDetails(version: string): Promise<PokemonVersionDetails | null> {
  // if dev mode, sleep for 2 seconds
  //if (process.env.NODE_ENV === 'development') {
  //  await new Promise((resolve) => setTimeout(resolve, 1500));
  //}

  try {
    const gamesDataDetailsResponse = await fetch(`${POKE_API_URL}version/${version}`, {
      next: { tags: [`pokemon-games-${version}`] },
    });
    const gamesDataDetails = await gamesDataDetailsResponse.json();
    return gamesDataDetails;
  } catch (error) {
    console.error('Error fetching game details', error);
    return null;
  }
}

export async function getVersionGroupDetails(versionGroupId: string): Promise<PokemonVersionGroupDetails | null> {
  // if dev mode, sleep for 2 seconds
  //if (process.env.NODE_ENV === 'development') {
  //  await new Promise((resolve) => setTimeout(resolve, 1000));
  //}

  try {
    const gamesVersionGroupDetailsResponse = await fetch(`${POKE_API_URL}version-group/${versionGroupId}`, {
      next: { tags: [`pokemon-games-version-group-${versionGroupId}`] },
    });
    const dataDetails = await gamesVersionGroupDetailsResponse.json();
    return dataDetails;
  } catch (error) {
    console.error('Error fetching game version group details', error);
    return null;
  }
}
