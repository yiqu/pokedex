import Image from 'next/image';
import startCase from 'lodash/startCase';
import { getSinglePokemon } from '@/lib/api/pokemon-data.api';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PokemonDetailsSpritesLayout from './pokemon-details-sprites-layout';

type PokemonDetailsSpritesProps = {
  id: string;
};

export default async function PokemonDetailsSprites({ id }: PokemonDetailsSpritesProps) {
  const pokemonDetail = await getSinglePokemon(id);
  const { sprites } = pokemonDetail;
  const spriteKeys = Object.keys(sprites);

  const spriteUrlFromStringValue = spriteKeys.filter((key) => {
    if (typeof sprites[key] === 'string' && sprites[key] !== null) {
      return key;
    }
    return false;
  });

  const otherNames = [];
  const { other } = sprites;
  if (other) {
    const keys = Object.keys(other).filter((key) => key !== 'dream_world');
    otherNames.push(...keys);
  }

  const versionNames = [];
  const { versions } = sprites;
  if (versions) {
    const keys = Object.keys(versions);
    versionNames.push(...keys);
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
      <Box width="100%">
        <Typography>Original</Typography>
        <Stack width="100%" direction="row" justifyContent="center" alignItems="center">
          <PokemonDetailsSpritesLayout>
            { spriteUrlFromStringValue.map((key, index) => {
              return (
                <Card
                  key={ key }
                  sx={ {
                    backgroundColor: '#e0c56c',
                    height: heights[index] ?? 50,
                    backgroundImage: `linear-gradient(95deg, #e0c56c, #f2e6c0)`,
                  } }
                  elevation={ 2 }
                >
                  <Stack
                    height="100%"
                    overflow="hidden"
                    direction="column"
                    justifyContent={ 'center' }
                    alignItems={ 'center' }
                  >
                    <Image src={ sprites[key] } alt={ key } priority height={ 130 } width={ 130 } />
                  </Stack>
                </Card>
              );
            }) }
          </PokemonDetailsSpritesLayout>
        </Stack>
      </Box>
      { otherNames.map((key, index) => {
        const spriteKeys = Object.keys(sprites['other'][key]);
        const spriteUrlFromStringValue = spriteKeys
          .map((key2) => {
            if (typeof sprites['other'][key][key2] === 'string' && sprites['other'][key][key2] !== null) {
              return sprites['other'][key][key2];
            }
            return false;
          })
          .filter((key2) => {
            return !!key2;
          });

        return (
          <Box key={ key ?? index } width="100%">
            <Typography>{ startCase(key) }</Typography>
            <Stack width="100%" direction="row" justifyContent="center" alignItems="center">
              <PokemonDetailsSpritesLayout>
                { spriteUrlFromStringValue.map((key, index) => {
                  return (
                    <Card
                      key={ key }
                      sx={ {
                        backgroundColor: '#99d6ff',
                        backgroundImage: `linear-gradient(95deg, #99d6ff, #e6f5ff)`,
                        height: heights2[index] ?? 50,
                      } }
                      elevation={ 2 }
                    >
                      <Stack
                        height={ '100%' }
                        overflow="hidden"
                        direction="column"
                        justifyContent={ 'center' }
                        alignItems={ 'center' }
                      >
                        <Image src={ key } alt={ key } priority height={ 90 } width={ 90 } />
                      </Stack>
                    </Card>
                  );
                }) }
              </PokemonDetailsSpritesLayout>
            </Stack>
          </Box>
        );
      }) }

      { versionNames.map((versionName: string, index) => {
        const versionValueObjectName = Object.keys(sprites['versions'][versionName]);

        return (
          <div key={ versionName } style={ { width: '100%' } }>
            { versionValueObjectName.map((versionGenGameName: string, index) => {
              const spriteKeys = Object.keys(sprites['versions'][versionName][versionGenGameName]);
              const spriteUrlFromStringValue = spriteKeys
                .map((key2) => {
                  if (
                    typeof sprites['versions'][versionName][versionGenGameName][key2] === 'string' &&
                    sprites['versions'][versionName][versionGenGameName][key2] !== null
                  ) {
                    return sprites['versions'][versionName][versionGenGameName][key2];
                  }
                  return false;
                })
                .filter((key2) => {
                  return !!key2;
                });

              return (
                <Box key={ `${versionName}${versionGenGameName}` } width="100%">
                  <Typography>
                    { startCase(versionName) } - { startCase(versionGenGameName) }
                  </Typography>
                  <Stack width="100%" direction="row" justifyContent="center" alignItems="center">
                    <PokemonDetailsSpritesLayout>
                      { spriteUrlFromStringValue.map((key, index) => {
                        return (
                          <Card
                            key={ key }
                            sx={ {
                              backgroundColor: '#f2f2f2',
                              backgroundImage: `linear-gradient(95deg, #e6e6e6, #f2f2f2)`,
                              height: heights3[index] ?? 50,
                            } }
                            elevation={ 2 }
                          >
                            <Stack
                              height="100%"
                              overflow="hidden"
                              direction="column"
                              justifyContent={ 'center' }
                              alignItems={ 'center' }
                              position="relative"
                            >
                              <Image src={ key } alt={ key } priority height={ 110 } width={ 110 } />
                            </Stack>
                          </Card>
                        );
                      }) }
                    </PokemonDetailsSpritesLayout>
                  </Stack>
                </Box>
              );
            }) }
          </div>
        );
      }) }
    </Stack>
  );
}

const heights = [150, 110, 140, 150, 180, 90, 130, 126, 130, 90];
const heights2 = [90, 120, 120, 147, 180, 90, 130, 126, 130, 90];
const heights3 = [126, 140, 130, 128, 180, 90, 130, 126, 130, 90];
