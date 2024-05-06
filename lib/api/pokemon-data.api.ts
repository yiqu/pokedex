import type { Comment } from '@/shared/models/game';
import { EST_TIME_ZONE } from '@/shared/date/date-display';
import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import type { FirebaseData } from '@/shared/models/firebase';
import { POKE_API_URL, FIREBASE_API_URL } from '@/config-global';
import type { PokemonData, FireFavoriteData } from '@/shared/models/list';
import type { PokemonSingleDetail, PokemonSingleEncounter } from '@/shared/models/pokemon';

const pokemonDataUrl = `${FIREBASE_API_URL}next/pokemon.json`;

export async function getPokemonData(): Promise<PokemonData> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }

  const pokemonDataResponse = await fetch(pokemonDataUrl, { next: { tags: ['pokemon-data'] } });
  const pokemonData = await pokemonDataResponse.json();
  return pokemonData;
}

export async function getSinglePokemon(id: string): Promise<PokemonSingleDetail> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }
  const pokemonDetailResponse = await fetch(`${POKE_API_URL}pokemon/${id}`, {
    next: { tags: [`pokemon-detail-${id}`] },
  });
  const pokemonDetail: PokemonSingleDetail = await pokemonDetailResponse.json();
  return pokemonDetail;
}

export async function getSinglePokemonLocationEncounter(id: string): Promise<PokemonSingleEncounter[]> {
  // if dev mode, sleep for 2 seconds
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 2500));
  }

  const pokemonDetailEncounterResponse = await fetch(`${POKE_API_URL}pokemon/${id}/encounters`, {
    next: { tags: [`pokemon-detail-${id}-encounters`] },
  });
  const pokemonDetailEncounter: PokemonSingleEncounter[] = await pokemonDetailEncounterResponse.json();
  return pokemonDetailEncounter;
}

export async function getCommentListByGameVersion(version: string): Promise<Comment[]> {
  // if dev mode, sleep for 2 seconds
  // if (process.env.NODE_ENV === 'development') {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // }
  const commentsResponse = await fetch(`${FIREBASE_API_URL}next/comments/${version}/.json`, {
    next: { tags: [`game-comments-${version}`] },
  });
  const comments: FirebaseData<Comment> = await commentsResponse.json();
  const commentListWithFireKey = Object.keys(comments ?? {}).map((key) => {
    const cDate = comments[key].commentDate;
    const commentDate =
      cDate ? formatInTimeZone(new Date(cDate), EST_TIME_ZONE, 'MM/dd/yy hh:mm a OOOO') : 'no date found.';
    return {
      ...comments[key],
      fireKey: key,
      commentDateDisplay: commentDate,
    };
  });
  commentListWithFireKey.sort((a, b) => (b.commentDate ?? 0) - (a.commentDate ?? 0));

  return commentListWithFireKey;
}

export async function getFavoriteLocations(): Promise<FireFavoriteData> {
  const response = await fetch(`${FIREBASE_API_URL}next/locations/.json`, {
    next: { tags: ['locations-favorite-data'] },
  });
  const locationsData = await response.json();
  if (!locationsData) {
    return {};
  }
  return locationsData;
}
