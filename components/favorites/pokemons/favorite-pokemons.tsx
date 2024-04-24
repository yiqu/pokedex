import { getPokemonData } from '@/lib/api/pokemon-data.api';
import PokemonSimpleDisplay from '@/components/home/simple';
import type { PokemonData, PokemonFavoriteDetail } from '@/shared/models/list';

import Stack from '@mui/material/Stack';

export default async function FavoritePokemons({ useAnimateButton }: { useAnimateButton?: boolean }) {
  const pokemons: PokemonData = await getPokemonData();
  const pokemonList: PokemonFavoriteDetail[] = Object.keys(pokemons).map((key: string) => {
    return {
      name: key,
      isFavorite: pokemons[key].isFavorite,
      pokemonIndex: pokemons[key].pokemonIndex,
    };
  });

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
      { pokemonList.map((pokemon: PokemonFavoriteDetail) => {
        return (
          <PokemonSimpleDisplay
            key={ pokemon.name }
            name={ pokemon.name }
            index={ +pokemon.pokemonIndex }
            favorite={ !!pokemon.isFavorite }
            useAnimateButton={ useAnimateButton }
          />
        );
      }) }
    </Stack>
  );
}
