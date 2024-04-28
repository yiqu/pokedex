import { Suspense } from 'react';
import startCase from 'lodash/startCase';
import GameDetailDisplay from '@/components/games/game-detail';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import GameDetailVersionGroupDisplay from '@/components/games/game-detail-version-group';

import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

export default async function GameDetailPage({ params }: { params: { gameId: string } }) {
  const { name, id } = getIdNameFromIdAndNamePathCombo(params.gameId);

  return (
    <Stack direction="column">
      <Stack direction="row" spacing={ 0.5 } justifyContent="start" alignItems="center">
        <Typography variant="h4" color="text.disabled">
          #{ id }
        </Typography>
        <Typography variant="h4">{ startCase(name) }</Typography>
        <Suspense fallback={ <Skeleton width="12rem" variant="rounded" /> }>
          <GameDetailVersionGroupDisplay id={ id } name={ name } />
        </Suspense>
      </Stack>
      <Stack mt={ 3 }>
        <Suspense fallback={ <Skeleton variant="rounded" height="16rem" /> }>
          <GameDetailDisplay id={ id } />
        </Suspense>
      </Stack>
    </Stack>
  );
}
