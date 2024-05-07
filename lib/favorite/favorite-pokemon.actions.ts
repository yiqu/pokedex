'use server';

import startCase from 'lodash/startCase';
import { revalidateTag } from 'next/cache';
import { FIREBASE_API_URL } from '@/config-global';
import type { FormActionState } from '@/shared/models/form-action.model';

export async function setPokemonAsFavorite(prevState: FormActionState, formData: FormData) {
  // sleep if dev
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  // }

  const pokemonName = formData.get('name') as string | null;
  const pokemonIndex = formData.get('index') as string | null;

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
      pokemonIndex: pokemonIndex,
    }),
  });

  revalidateTag('pokemon-data');

  return {
    status: response.ok ? 'success' : 'error',
    message: response.ok ? `${startCase(pokemonName)} added to favorites` : `Error adding Pokemon to favorites`,
    payload: {
      name: pokemonName,
    },
  };
}

export async function removePokemonFromFavorites(prevState: FormActionState, formData: FormData) {
  const pokemonName = formData.get('name') as string | null;

  if (!pokemonName) {
    return {
      status: 'error',
      message: 'Error removing Pokemon from favorites',
      payload: null,
    };
  }

  const response = await fetch(`${FIREBASE_API_URL}next/pokemon/${pokemonName}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isFavorite: false,
      pokemonIndex: undefined,
    }),
  });

  revalidateTag('pokemon-data');

  return {
    status: response.ok ? 'success' : 'error',
    message: response.ok ? `${startCase(pokemonName)} removed from favorites` : `Error removing Pokemon from favorites`,
    payload: {
      name: pokemonName,
    },
  };
}

export async function setPokemonAsFavorite2(formData: FormData) {
  // sleep if dev
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  // }

  const pokemonName = formData.get('name') as string | null;
  const pokemonIndex = formData.get('index') as string | null;

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
      pokemonIndex: pokemonIndex,
    }),
  });

  revalidateTag('pokemon-data');

  return {
    status: response.ok ? 'success' : 'error',
    message: response.ok ? `${startCase(pokemonName)} added to favorites` : `Error adding Pokemon to favorites`,
    payload: {
      name: pokemonName,
    },
  };
}


export async function removePokemonFromFavorites2(formData: FormData) {
  const pokemonName = formData.get('name') as string | null;

  if (!pokemonName) {
    return {
      status: 'error',
      message: 'Error removing Pokemon from favorites',
      payload: null,
    };
  }

  const response = await fetch(`${FIREBASE_API_URL}next/pokemon/${pokemonName}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isFavorite: false,
      pokemonIndex: undefined,
    }),
  });

  revalidateTag('pokemon-data');

  return {
    status: response.ok ? 'success' : 'error',
    message: response.ok ? `${startCase(pokemonName)} removed from favorites` : `Error removing Pokemon from favorites`,
    payload: {
      name: pokemonName,
    },
  };
}
