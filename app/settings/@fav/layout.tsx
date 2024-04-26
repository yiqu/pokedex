import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function SettingsFavSlotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Paper variant="outlined" sx={ { pt: 3, px: 2, pb: 2, width: '100%' } }>
      <Stack width="100%" spacing={ 2 } direction="column">
        { children }
      </Stack>
    </Paper>
  );
}
