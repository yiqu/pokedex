'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { setPokemonAsFavorite } from '@/lib/favorite/favorite-pokemon.actions';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function FavoritePokemonButton({
  pokemonName,
  isFavorite,
}: {
  pokemonName: string;
  isFavorite: boolean;
}) {
  const [state, setFavoriteAction] = useFormState(setPokemonAsFavorite, {
    message: '',
    status: '',
    payload: null,
  });

  return (
    <form action={ setFavoriteAction }>
      <input type="hidden" name="name" value={ pokemonName } />
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
        <FavoriteIcon fontSize="small" color='disabled' />
      : <FavoriteBorderIcon fontSize="small" /> }
    </IconButton>
  );
}
