import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function SettingsLocationsSlotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Paper variant="outlined" sx={ { pt: 3, px: 2, pb: 2, width: '100%' } }>
      <Stack width="100%" spacing={ 2 } direction="column">
        <Typography variant="h6">Locations Configurations</Typography>
        { children }
      </Stack>
    </Paper>
  );
}
