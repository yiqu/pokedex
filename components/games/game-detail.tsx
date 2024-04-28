import startCase from 'lodash/startCase';
import { notFound } from 'next/navigation';
import { getGameDetails } from '@/lib/api/pokemon.api';
import type { PokemonVersionDetails } from '@/shared/models/list';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function GameDetailDisplay({ id }: { id: string }) {
  const details: PokemonVersionDetails | null = await getGameDetails(id);

  if (!details) {
    return notFound();
  }

  return (
    <div>
      { details.names.map((name) => {
        return (
          <Stack key={ name.language.name } direction="row" spacing={ 1 }>
            <Typography variant="body1">{ name.name }</Typography>
            <Typography variant="body2" color="text.disabled">
              ({ startCase(name.language.name) })
            </Typography>
          </Stack>
        );
      }) }
    </div>
  );
}
