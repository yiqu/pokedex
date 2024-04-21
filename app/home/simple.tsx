import startCase from 'lodash/startCase';
import AppLink from '@/shared/link/app-link';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface PokemonSimpleProps {
  name: string;
  url: string;
  index: number;
}
export default function PokemonSimple({ name, url, index }: PokemonSimpleProps) {
  const urlLink = `/pokemon/${name}`;

  return (
    <Stack direction="row" justifyContent="start" alignItems="start">
      <AppLink
        href={ urlLink }
        title={
          <Stack direction="row" spacing={ 1 }>
            <Typography>{ index }</Typography>
            <Typography>{ startCase(name) }</Typography>
          </Stack>
        }
      />
    </Stack>
  );
}
