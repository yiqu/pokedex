import { Suspense } from 'react';
import { startCase } from 'lodash';
import DateDisplay from '@/shared/date/date-display';
import DialogWrapper from '@/shared/dialog/DialogLayout';
import type { IPageProps } from '@/shared/models/page.models';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import ReloadButton from '@/components/favorites/dialog-reload-button';
import PokemonDetailsDefaultSprite from '@/components/pokemon/sprites/pokemon-details-default-sprite';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';

export default function FavoritePokemonDialogPage({ params }: IPageProps<{ pokemonId: string }>) {
  const { name, id } = getIdNameFromIdAndNamePathCombo(params.pokemonId);

  return (
    <DialogWrapper open={ true }>
      <DialogContent sx={ { minWidth: '30rem' } }>
        <Stack width="100%" direction="column" justifyContent="start" alignItems="center" spacing={ 3 } my={ 2 }>
          <Stack direction="row" spacing={ 1 }>
            <Typography variant="h4" color="text.disabled">
              #{ id }
            </Typography>
            <Typography variant="h4">{ startCase(name) }</Typography>
          </Stack>

          <Suspense fallback={ <Skeleton variant="rectangular" width="70%" height="212px" /> }>
            <PokemonDetailsDefaultSprite id={ id } />
          </Suspense>

          <Stack>
            <ReloadButton />
          </Stack>

          <Stack direction="row" justifyContent="end" width="100%">
            <DateDisplay />
          </Stack>
        </Stack>
      </DialogContent>
    </DialogWrapper>
  );
}
