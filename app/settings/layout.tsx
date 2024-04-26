import SettingsLeftNav from '@/components/settings/settings-left-nav';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function SettingsLayout({
  children,
  favorites,
  games,
  items,
  list,
  locations,
  profile,
}: Readonly<{
  children: React.ReactNode;
  favorites: React.ReactNode;
  locations: React.ReactNode;
  games: React.ReactNode;
  items: React.ReactNode;
  list: React.ReactNode;
  profile: React.ReactNode;
}>) {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 3 } my={ 2 }>
      <Stack direction="row" spacing={ 1 }>
        <Typography variant="h4">Settings</Typography>
      </Stack>

      <Box width="100%">
        <Grid container spacing={ 2 }>
          <Grid xs={ 12 } sm={ 12 } md={ 3 }>
            <SettingsLeftNav />
          </Grid>
          <Grid xs={ 12 } sm={ 12 } md={ 9 }>
            <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 2 }>
              { children }
              { list }
              { games }
              { locations }
              { items }
              { favorites }
              { profile }
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default SettingsLayout;
