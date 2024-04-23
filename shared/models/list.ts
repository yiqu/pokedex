export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSimple[];
}

export interface PokemonSimple {
  name: string;
  url: string;
  favorite?: boolean;
}

export interface PokemonData {
  [name: string]: {
    isFavorite: boolean;
    pokemonIndex: string;
  };
}

export interface PokemonFavoriteDetail {
  name: string;
  isFavorite: boolean;
  pokemonIndex: string;
}