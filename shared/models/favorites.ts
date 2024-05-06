import type { PokemonGameSimple } from './pokemon';

export interface FavoriteLocationPutData {
  location: PokemonGameSimple;
  isFavorite: boolean;
}
