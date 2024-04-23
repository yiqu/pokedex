'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useFormState, useFormStatus } from 'react-dom';
import { setPokemonAsFavorite, removePokemonFromFavorites } from '@/lib/favorite/favorite-pokemon.actions';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function FavoritePokemonButton({
  pokemonName,
  isFavorite,
  pokemonIndex,
}: {
  pokemonName: string;
  isFavorite: boolean;
  pokemonIndex: number;
}) {
  const [state, setFavoriteAction] = useFormState(isFavorite ? removePokemonFromFavorites : setPokemonAsFavorite, {
    message: '',
    status: '',
    payload: null,
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast.success(`${state.message}`);
    }
    return () => {
      toast.remove();
    };
  }, [pokemonName, state.message, state.status]);

  return (
    <form action={ setFavoriteAction }>
      <input type="hidden" name="name" value={ pokemonName } />
      <input type="hidden" name="index" value={ pokemonIndex } />
      <FavoriteButton isFavorite={ isFavorite } />
    </form>
  );
}

function FavoriteButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending, data, method, action } = useFormStatus();

  return (
    <IconButton size="small" type="submit" disabled={ pending }>
      { pending ?
        <CircularProgress size={ 20 } color="warning" />
      : isFavorite ?
        <FavoriteIcon fontSize="small" color="primary" />
      : <FavoriteBorderIcon fontSize="small" /> }
    </IconButton>
  );
}
