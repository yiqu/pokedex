import type { Route } from 'next';
import { APP_TITLE } from '@/config-global';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import LogoLink from './logo-link';
import AppLink from './link/app-link';
import AppTopNavLeftLinks from './app-top-nav-left-links';

export default function AppTopNavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={ 0 }
      sx={ {
        borderBottom: '1px solid #ebebeb',
        mt: 0,
        top: 0,
        backdropFilter: 'blur(2px)',
        backgroundColor: '#f2f2f236',
      } }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoLink />
          <Typography variant="h2" ml={ 2 }>
            <AppLink href="/" title={ APP_TITLE as Route } />
          </Typography>
          <Box sx={ { flexGrow: 1 } } />
          <AppTopNavLeftLinks />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
