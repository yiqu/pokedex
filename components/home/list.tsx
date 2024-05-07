'use client';

import { mutate } from 'swr';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PokemonListSegment from './pokemon-list-segment';

export default function PokemonList() {
  // sequential fetch
  // const pokemons = await getPokemonList();
  // const pokemonData = await getPokemonData();

  // parallel fetch
  //const pokemonListData = getPokemonList();
  // const pokemonDataData = getPokemonData();
  //const [pokemons, pokemonData] = await Promise.all([pokemonListData, pokemonDataData]);


  const [segCount, setSegCount] = useState(1);
  const listSegments = [];
  for (let i = 0; i < segCount; i++) {
    listSegments.push(<PokemonListSegment key={ i } pageNumber={ i } />);
  }

  const handleOnLoadMoreClick = () => {
    setSegCount((prev) => {
      return prev + 1;
    });
  };

  const handleRevalidate = () => {
    mutate(
      (key: any) => {
        if (typeof key === 'string') {
          return key.includes('next/pokemon.json');
        }
      },
      undefined,
      {
        revalidate: true,
      },
    );
  };

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 1 } width="100%">
      <Box>
        <Button onClick={ handleRevalidate }>Revalidate</Button>
      </Box>
      { listSegments }
      <Box width="100%">
        <Button variant="outlined" fullWidth onClick={ handleOnLoadMoreClick }>
          Load more
        </Button>
      </Box>
    </Stack>
  );
}
