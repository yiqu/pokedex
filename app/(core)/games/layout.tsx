import Stack from '@mui/material/Stack';

function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Stack>{ children }</Stack>;
}

export default GamesLayout;
