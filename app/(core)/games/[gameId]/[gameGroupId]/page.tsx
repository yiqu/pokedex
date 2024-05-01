import startCase from 'lodash/startCase';
import { getGameDetails } from '@/lib/api/pokemon.api';
import type { PokemonVersionDetails } from '@/shared/models/list';
import { URL_ID_NAME_SEPARATOR, getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Generate segments for [gameGroupId] using the `params` passed from
// the parent segment's `generateStaticParams` function
export async function generateStaticParams({ params }: { params: { gameId: string } }) {
  const { id } = getIdNameFromIdAndNamePathCombo(params.gameId);

  const gameDetails: PokemonVersionDetails | null = await getGameDetails(id);
  const versionGroups = gameDetails?.version_group ? [gameDetails.version_group] : [];
  const staticParams = versionGroups.map((versionGroup) => {
    const versionGroupId = versionGroup.url.split('/').slice(-2)[0];
    const versionGroupName = versionGroup.name;
    const versionGroupIdAndName = `${versionGroupName}${URL_ID_NAME_SEPARATOR}${versionGroupId}`;
    return {
      gameGroupId: versionGroupIdAndName,
    };
  });

  // eslint-disable-next-line no-console
  // console.log('IN PAGE:: generated game group ids static params: ', staticParams.length, staticParams[0]);
  return staticParams;
}


export default function GameGroupPage({ params }: { params: { gameId: string; gameGroupId: string } }) {
  if (!params.gameGroupId || !params.gameId) {
    return <Stack>Oops, something went wrong.</Stack>;
  }

  const { name: gameGroupName } = getIdNameFromIdAndNamePathCombo(params.gameGroupId);
  const { name: gameName } = getIdNameFromIdAndNamePathCombo(params.gameId);

  return (
    <Stack direction="row" spacing={ 0.5 } justifyContent="start" alignItems="center">
      <Typography variant="h4" color="text.disabled">
        #{ startCase(gameGroupName) }
      </Typography>
      :<Typography variant="h4">{ startCase(gameName) }</Typography>
    </Stack>
  );
}
