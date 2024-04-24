import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

export default function PokemonListLoading() {
  // show 40 loading skeletons
  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 } sx={ { pl: 2 } }>
      { Array.from({ length: 40 }, (_, index) => {
        return <Skeleton key={ index } width="6rem" height="60px" />;
      }) }
    </Stack>
  );
}

export function PokemonDetailsSpritesLoading() {
  const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
  return (
    <Box width="100%" overflow="hidden">
      <Masonry columns={ 2 } spacing={ 2 } defaultHeight={ 450 } defaultColumns={ 2 } defaultSpacing={ 1 }>
        { heights.map((height, index) => {
          return (
            <Skeleton key={ index } variant='rectangular' height={ height } />
          );
        }) }
      </Masonry>
    </Box>
  );
}
