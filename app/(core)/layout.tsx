import DateDisplay from '@/shared/date/date-display';

import Stack from '@mui/material/Stack';

export default function CoreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start">
      { children }
      <Stack my={ 3 } width="100%" justifyContent="end" direction="row">
        <DateDisplay />
      </Stack>
    </Stack>
  );
}
