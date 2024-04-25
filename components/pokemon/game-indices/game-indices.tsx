import startCase from 'lodash/startCase';
import { getSinglePokemon } from '@/lib/api/pokemon-data.api';
import type { PokemonSingleDetail } from '@/shared/models/pokemon';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function PokemonDetailsGameIndicesDisplay({ id }: { id: string }) {
  const pokemonDetail: PokemonSingleDetail = await getSinglePokemon(id);

  return (
    <Paper variant="elevation" elevation={ 0 } sx={ { p: 1 } }>
      <Stack direction="column" spacing={ 1 }>
        <table style={ { width: '100%' } }>
          <thead>
            <tr>
              <th style={ { width: '8%', textAlign: 'left' } }>
                <Typography fontWeight={ 500 }>#</Typography>
              </th>
              <th style={ { textAlign: 'left' } }>
                <Typography fontWeight={ 500 }>Game</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            { pokemonDetail.game_indices.map((gameIndex, index: number) => {
              const gameIndexId = gameIndex.version.url.split('/').slice(-2)[0];

              return (
                <tr key={ gameIndex.version.url }>
                  <td style={ { width: '8%' } }>
                    <Typography fontWeight={ 400 }>{ gameIndexId }</Typography>
                  </td>
                  <td>
                    <Typography fontWeight={ 400 }>{ startCase(gameIndex.version.name) }</Typography>
                  </td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </Stack>
    </Paper>
  );
}
