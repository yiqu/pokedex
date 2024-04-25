'use client';

import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PokemonDetailsSpritesShowMore({ children }: { children: React.ReactNode }) {
  const [showMoreSprites, setShowMoreSprites] = useState<boolean>(false);

  const handleShowMoreSprites = () => {
    setShowMoreSprites((prev) => !prev);
  };

  return (
    <Stack direction="column" width="100%">
      <Stack direction="row" width="100%" justifyContent="center" alignItems="center">
        { !showMoreSprites && (
          <Button variant="outlined" size="small" onClick={ handleShowMoreSprites } color="primary">
            Show more
          </Button>
        ) }
      </Stack>
      { showMoreSprites && children }
    </Stack>
  );
}
