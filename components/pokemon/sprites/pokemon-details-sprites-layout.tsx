import type { ReactNode } from 'react';

import Masonry from '@mui/lab/Masonry';

export default function PokemonDetailsSpritesLayout({ children }: { children: ReactNode }) {
  return (
    <Masonry columns={ 2 } spacing={ 2 }>
      { children  ?? <></> }
    </Masonry>
  );
}
