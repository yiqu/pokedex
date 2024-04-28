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

export interface PokeApiXhrResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface PokemonVersionDetails {
  id: number;
  name: string;
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
  version_group: {
    name: string;
    url: string;
  };
}

export interface PokemonVersionGroupDetails {
  id: number;
  name: string;
  generation: {
    name: string;
    url: string;
  };
  order: number;
  versions: {
    name: string;
    url: string;
  }[];
  regions: {
    name: string;
    url: string;
  }[];
  pokedexes: {
    name: string;
    url: string;
  }[];
  move_learn_methods: {
    name: string;
    url: string;
  }[];
}