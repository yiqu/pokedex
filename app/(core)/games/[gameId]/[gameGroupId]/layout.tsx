import DateDisplay from '@/shared/date/date-display';

import Stack from '@mui/material/Stack';

function GameDetailGroupVersionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      { children }
      <Stack direction="row" justifyContent="end" width="100%">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}

export default GameDetailGroupVersionLayout;
