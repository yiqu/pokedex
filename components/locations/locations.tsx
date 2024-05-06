'use client';

import { produce } from 'immer';
import toast from 'react-hot-toast';
import { useOptimistic } from 'react';
import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';
import type { FireFavoriteData } from '@/shared/models/list';
import type { PokemonGameSimple } from '@/shared/models/pokemon';
import type { FavoriteLocationPutData } from '@/shared/models/favorites';
import { toggleFavoriteLocation2 } from '@/lib/favorite/favorite-location.actions';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Locations({
  locationsData,
  favorites,
}: {
  locationsData: PokemonGameSimple[];
  favorites: FireFavoriteData;
}) {

  /**
   * Optimistic state for favorite locations.
   */
  const [optimisticFavoriteLocations, addOptimisticFavoriteLocation] = useOptimistic(
    favorites,
    (curr: FireFavoriteData, optimisticValue: FavoriteLocationPutData) => {
      const result: FireFavoriteData = produce(curr, (draft) => {
        draft[optimisticValue.location.name] = {
          ...draft[optimisticValue.location.name],
          isFavorite: optimisticValue.isFavorite,
          locationUrl: optimisticValue.location.url,
          isLoading: true,
        };
      });

      return result;
    },
  );

  /**
   * Optimistically update the favorite location.
   * Get the updated data, update the local optimistic state, and then update the server.
   * React will append the new data to the optimisticFavoriteLocations object, then remove the overwrite data after await is done.
   * @param formData 
   */
  async function onToggleFavoriteAction(formData: any) {
    const fav = formData.get('isFavorite') as string;
    const isFav = fav === 'true' ? true : false;
    const locationUrl = formData.get('locationUrl') as string;
    const name = formData.get('name') as string;

    addOptimisticFavoriteLocation({
      isFavorite: !isFav,
      location: {
        name: name,
        url: locationUrl,
      },
    });

    const result = await toggleFavoriteLocation2(formData);
    
    if (result.status === 'success') {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <Stack spacing={ 1.5 }>
      { locationsData.map((location) => {
        const index = location.url.split('/').filter(Boolean).pop();
        const urlLink = `/locations/${location.name}${URL_ID_NAME_SEPARATOR}${index}`;
        const isFavorite: boolean = optimisticFavoriteLocations[location.name]?.isFavorite || false;
        const isOptimisticLoading: boolean = optimisticFavoriteLocations[location.name]?.isLoading || false;

        return (
          <Stack key={ location.url } direction="row" justifyContent="start" alignItems="center">
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
              <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
                <form action={ onToggleFavoriteAction }>
                  <IconButton size="small" type="submit">
                    { isFavorite ?
                      <FavoriteIcon fontSize="small" color="primary" />
                    : <FavoriteBorderIcon fontSize="small" /> }
                  </IconButton>
                  <input type="hidden" name="name" value={ location.name } />
                  <input type="hidden" name="locationUrl" value={ location.url } />
                  <input type="hidden" name="isFavorite" value={ isFavorite ? 'true' : 'false' } />
                </form>
              </Stack>
              <AppLink
                href={ urlLink }
                title={ <Typography variant="body2">{ startCase(location.name) }</Typography> }
                scroll={ true }
              />
              { isOptimisticLoading && (
                <Stack justifyContent="start" alignItems="center">
                  <CircularProgress size={ 14 } />
                </Stack>
              ) }
            </Stack>
          </Stack>
        );
      }) }
    </Stack>
  );
}
