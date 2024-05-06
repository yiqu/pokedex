'use server';

import startCase from 'lodash/startCase';
import { revalidateTag } from 'next/cache';
import { FIREBASE_API_URL } from '@/config-global';
import type { FormActionState } from '@/shared/models/form-action.model';

import { revalidateByPath } from '../cache/revalidate';

export async function toggleFavoriteLocation(prevState: FormActionState, formData: FormData): Promise<any> {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const locationName = formData.get('name') as string;
  const locationUrl = formData.get('locationUrl') as string;
  const isFavorite = formData.get('isFavorite') as string;

  const url = `${FIREBASE_API_URL}next/locations/${locationName}.json`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isFavorite: isFavorite === 'true' ? true : false,
      locationUrl: locationUrl,
    }),
  });

  revalidateTag('locations-favorite-data');

  return {
    status: response.ok ? 'success' : 'error',
    message:
      response.ok ?
        `${startCase(locationName)} added to favorites`
      : `Error adding ${startCase(locationName)} to favorites`,
    payload: {
      name: locationName,
    },
  };
}


export async function toggleFavoriteLocation2(formData: FormData) {
// if dev mode, sleep for 2 seconds
if (process.env.NODE_ENV === 'development') {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

const locationName = formData.get('name') as string;
const locationUrl = formData.get('locationUrl') as string;
const isFavorite = formData.get('isFavorite') as string;
const nextFavoriteStatus = isFavorite === 'true' ? false : true;

const url = `${FIREBASE_API_URL}next/locations/${locationName}.json`;
const response = await fetch(url, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    isFavorite: nextFavoriteStatus,
    locationUrl: locationUrl,
  }),
});

//revalidateTag('locations-favorite-data');
revalidateByPath('/locations');

return {
  status: response.ok ? 'success' : 'error',
  message:
    response.ok ?
      `${startCase(locationName)} ${nextFavoriteStatus ? 'added to' : 'removed from' }  favorites`
    : `Error updating ${startCase(locationName)}`,
  payload: {
    name: locationName,
  },
};
}