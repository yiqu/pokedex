import AppLink from '@/shared/link/app-link';

import List from '@mui/material/List';
import TvIcon from '@mui/icons-material/Tv';
import ListItem from '@mui/material/ListItem';
import FaceIcon from '@mui/icons-material/FaceOutlined';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import PersonIcon from '@mui/icons-material/PersonOutline';
import FilterAltIcon from '@mui/icons-material/FilterAltOutlined';


export default function SettingsLeftNav() {
  return (
    <List sx={ { width: '100%', pt: 0 } } component="nav" aria-labelledby="left-nav">
      <ListItem>
        <AppLink href="/settings/display" title="Display" icon={ <TvIcon /> } />
      </ListItem>

      <ListItem>
        <AppLink href="/settings/avatars" title="Avatars" icon={ <FaceIcon /> } />
      </ListItem>

      <ListItem>
        <AppLink href="/settings/labels" title="Labels" icon={ <LabelIcon /> } />
      </ListItem>

      <ListItem>
        <AppLink href="/settings/filters" title="Filters" icon={ <FilterAltIcon /> } />
      </ListItem>

      <ListItem>
        <AppLink href="/settings/profile" title="My Profile" icon={ <PersonIcon /> } />
      </ListItem>
    </List>
  );
}
