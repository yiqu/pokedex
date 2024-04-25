import Image from 'next/image';
import { getSinglePokemon } from '@/lib/api/pokemon-data.api';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

export default async function PokemonDetailsDefaultSprite({ id }: { id: string }) {
  const pokemonDetail = await getSinglePokemon(id);
  const dreamWorldSrc = pokemonDetail.sprites.other['dream_world']['front_default'];

  return (
    <Card
      sx={ { backgroundColor: '#e0c56c', backgroundImage: `linear-gradient(45deg, #0075BE, #FFCC00)`, p: 2 } }
      elevation={ 2 }
    >
      <Stack justifyContent="center" alignItems="center">
        <Image src={ dreamWorldSrc } alt={ 'dream_world_sprite' } priority height={ 180 } width={ 180 } />
      </Stack>
    </Card>
  );
}
