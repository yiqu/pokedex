import { FIREBASE_API_URL } from '@/config-global';
import { getPokemonListUrl } from '@/shared/utils';
import type { PokemonSimple, PokemonListResponse } from '@/shared/models/list';

//export const dynamic = 'force-dynamic';

const pokemonDataUrl = `${FIREBASE_API_URL}next/pokemon.json`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const offset: string | null = searchParams.get('offset');

  try {
    const pokemonDataResponse = await fetch(pokemonDataUrl, { next: { tags: ['pokemon-data'] } });
    const pokemonData = await pokemonDataResponse.json();
    const { length } = Object.keys(pokemonData);

    const pokemonsResponse = await fetch(getPokemonListUrl(0, 40), { next: { tags: ['pokemon-list'] } });
    const pokemons: PokemonListResponse = await pokemonsResponse.json();

    const pokemonWithFavoriteStatus = pokemons.results.map((pokemon: PokemonSimple) => {
      const { name } = pokemon;
      const favorite: boolean = pokemonData[name] ? pokemonData[name].isFavorite : false;
      return {
        ...pokemon,
        favorite,
      };
    });

    const result = {
      status: 'success',
      data: pokemonWithFavoriteStatus,
      total: length,
    };
    
    return Response.json(result);

  } catch (error) {
    return Response.error();
  }
}
