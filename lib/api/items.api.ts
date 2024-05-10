import { POKE_API_URL } from '@/config-global';
import type { PokeApiXhrResponse } from '@/shared/models/list';
import type { PokemonGameSimple } from '@/shared/models/pokemon';

export const LIMIT_SIZE = 50;

export async function getItemsList(offset: number = 0, limit: number = 100): Promise<PokeApiXhrResponse<PokemonGameSimple> | null>  {
  // if dev mode, sleep for 2 seconds
  //if (process.env.NODE_ENV === 'development') {
  //  await new Promise((resolve) => setTimeout(resolve, 1000));
  //}

  try {
    const result = await fetch(`${POKE_API_URL}item?offset=${offset}&limit=${limit}`, {
      next: { tags: [`pokemon-items`] },
    });
    const dataDetails = await result.json();
    return dataDetails;
  } catch (error) {
    console.error('Error fetching items', error);
    return null;
  }
}
