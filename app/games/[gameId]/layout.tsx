import Stack from '@mui/material/Stack';

function GameDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      { children }
    </Stack>
  );
}

export default GameDetailLayout;
