import Link from 'next/link';

import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsportsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';

import AppLink from './link/app-link';

export default function AppTopNavLeftLinks() {
  return (
    <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 4 }>
      <AppLink href="/favorites" title="Favorites" icon={ <FavoriteBorderIcon fontSize="small" /> } />
      <AppLink href="/games" title="Games" icon={ <SportsEsportsIcon fontSize="small" /> } />
      <AppLink href="/locations" title="Locations" icon={ <LocationOnIcon fontSize="small" /> } />
      <AppLink href="/items" title="Items" icon={ <CategoryIcon fontSize="small" /> } />
      <AppLink href="/settings" title="Settings" icon={ <SettingsIcon fontSize="small" /> } />
      <Link href={ 'https://github.com/yiqu/pokedex' } target="_blank" style={ { display: 'flex' } }>
        <GitHubIcon fontSize="medium" color="success" />
      </Link>
    </Stack>
  );
}
