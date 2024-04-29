'use server';

import startCase from 'lodash/startCase';
import { revalidateTag } from 'next/cache';
import { FIREBASE_API_URL } from '@/config-global';
import type { FormActionState } from '@/shared/models/form-action.model';

export async function addCommentAndRatingForGame(gameName: string, prevState: FormActionState, formData: FormData) {
  // sleep if dev
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  // }

  const comment = formData.get('comment') as string | null;
  const rating = formData.get('rating') as string;
  const userInput = {
    comment,
    rating: parseInt(rating),
  };

  if (!comment) {
    return {
      status: 'error',
      message: 'Please provide a comment',
      payload: userInput,
    };
  }

  const response = await fetch(`${FIREBASE_API_URL}next/comments/${gameName}.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      comment,
      rating,
    }),
  });
  const responseData = await response.json();

  return {
    status: response.ok ? 'success' : 'error',
    message: response.ok ? `Comment added successfully for ${startCase(gameName)}` : `Failed to add comment`,
    payload: {
      ...userInput,
      ...responseData,
    },
  };
}
