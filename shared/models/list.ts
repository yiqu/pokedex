export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSimple[];
}

export interface PokemonSimple {
  name: string;
  url: string;
}