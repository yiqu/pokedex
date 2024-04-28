import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';
import { getGameDetails } from '@/lib/api/pokemon.api';
import { URL_ID_NAME_SEPARATOR } from '@/shared/url.utils';
import type { PokemonVersionDetails } from '@/shared/models/list';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function GameDetailVersionGroupDisplay({ name, id }: { name: string; id: string }) {
  const details: PokemonVersionDetails | null = await getGameDetails(id);

  if (!details) {
    return (
      <Stack>
        <Typography variant="h6" color="text.disabled">
          No version group found.
        </Typography>
      </Stack>
    );
  }

  const versionGroupIdAndName = `${details.version_group.name}${URL_ID_NAME_SEPARATOR}${details.version_group.url.split('/').slice(-2)[0]}`;

  return (
    <Typography variant="h4" color="text.disabled">
      <AppLink
        href={ `/games/${name}${URL_ID_NAME_SEPARATOR}${id}/${versionGroupIdAndName}` }
        title={ `(${startCase(details.version_group.name)})` }
      />
    </Typography>
  );
}
