'use server';

import { revalidateTag } from 'next/cache';
import { FIREBASE_API_URL } from '@/config-global';
import type { FormActionState } from '@/shared/models/form-action.model';

export async function setPokemonAsFavorite(prevState: FormActionState<{ name: string }>, formData: FormData) {
  // sleep if dev
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  const pokemonName = formData.get('name') as string | null;
  if (!pokemonName) {
    return {
      status: 'error',
      message: 'Error adding Pokemon to favorites',
      payload: null,
    };
  }

  const response = await fetch(`${FIREBASE_API_URL}next/pokemon/${pokemonName}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isFavorite: true,
    }),
  });

  revalidateTag('pokemon-data');

  return {
    status: response.ok ? 'success' : 'error',
    message: response.ok ? 'Pokemon added to favorites' : 'Error adding Pokemon to favorites',
    payload: {
      name: pokemonName,
    },
  };
}
