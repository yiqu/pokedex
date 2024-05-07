'use client';

import { mutate } from 'swr';
import toast from 'react-hot-toast';
import startCase from 'lodash/startCase';
import { useFormStatus } from 'react-dom';
import { setPokemonAsFavorite2, removePokemonFromFavorites2 } from '@/lib/favorite/favorite-pokemon.actions';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function FavoritePokemonButton({
  pokemonName,
  isFavorite,
  pokemonIndex,
  useAnimate = false,
}: {
  pokemonName: string;
  isFavorite: boolean;
  pokemonIndex: number;
  useAnimate?: boolean;
}) {
  const onFavoriteAction = async (formData: FormData) => {
    if (isFavorite) {
      await removePokemonFromFavorites2(formData);
    } else {
      await setPokemonAsFavorite2(formData);
    }

    mutate((key: any) => {
      if (typeof key === 'string') {
        return key.includes('next/pokemon/.json');
      }
    });
    toast.success(`${isFavorite ? 'Removed from' : 'Added to'} favorites: ${startCase(pokemonName)}`);
  };

  return (
    <form action={ onFavoriteAction }>
      <input type="hidden" name="name" value={ pokemonName } />
      <input type="hidden" name="index" value={ pokemonIndex } />
      <FavoriteButton isFavorite={ isFavorite } />
    </form>
  );
}

function FavoriteButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending } = useFormStatus();

  return (
    <IconButton size="small" type="submit" disabled={ pending }>
      { isFavorite ?
        <FavoriteIcon fontSize="small" color="primary" />
      : <FavoriteBorderIcon fontSize="small" /> }
    </IconButton>
  );
}
