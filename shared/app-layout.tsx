import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import AppTopNavBar from './app-top-nav-bar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box width="100%">
      <AppTopNavBar />
      <Grid container sx={ { flexGrow: 1 } }>
        <Grid md={ 6 } mdOffset={ 3 }>
          { children }
        </Grid>
      </Grid>
    </Box>
  );
}
