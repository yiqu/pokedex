'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAnimate } from 'framer-motion';
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
  useAnimate = false,
}: {
  pokemonName: string;
  isFavorite: boolean;
  pokemonIndex: number;
  useAnimate?: boolean;
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
      { useAnimate ?
        <FavoriteAnimateButton isFavorite={ isFavorite } />
      : <FavoriteButton isFavorite={ isFavorite } /> }
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

function FavoriteAnimateButton({ isFavorite }: { isFavorite: boolean }) {
  const { pending, data, method, action } = useFormStatus();

  const [scope, animate] = useAnimate();

  const handleOnClick = () => {
    animate(scope.current, {
      scale: isFavorite ? [1] : [1.2, 1.3, 1.2, 1],
      transition: { type: 'spring', stiffness: 100 },
    });
  };

  return (
    <IconButton size="small" type="submit" disabled={ pending } onClick={ handleOnClick } ref={ scope }>
      { isFavorite ?
        <FavoriteIcon fontSize="small" color="primary" />
      : <FavoriteBorderIcon fontSize="small" /> }
    </IconButton>
  );
}
