import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

export default function PokemonListLoading() {
  // show 40 loading skeletons
  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 }>
      { Array.from({ length: 40 }, (_, index) => {
        return <Skeleton key={ index } width="6rem" height="1.4rem" />;
      }) }
    </Stack>
  );
}
