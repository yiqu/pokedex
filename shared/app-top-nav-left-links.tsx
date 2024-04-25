import Link from 'next/link';

import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';

import AppLink from './link/app-link';
export default function AppTopNavLeftLinks() {
  return (
    <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 4 }>
      <AppLink href="/favorites" title="Favorites" />
      <AppLink href="/games" title="Games" />
      <AppLink href="/locations" title="Locations" />
      <AppLink href="/items" title="Items" />
      <Link href={ 'https://github.com/yiqu/pokedex' } target="_blank" style={ {display: 'flex'} }>
        <GitHubIcon fontSize="medium" color="success" />
      </Link>
    </Stack>
  );
}
