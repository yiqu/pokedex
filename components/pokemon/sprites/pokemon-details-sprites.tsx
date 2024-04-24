import Image from 'next/image';
import startCase from 'lodash/startCase';
import { getSinglePokemon } from '@/lib/api/pokemon-data.api';

import Box from '@mui/material/Box';
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
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 2 }>
      <Box width="100%">
        <Typography>Original</Typography>
        <Stack width="100%" direction="row" justifyContent="center" alignItems="center">
          <PokemonDetailsSpritesLayout>
            { spriteUrlFromStringValue.map((key, index) => {
              return (
                <Stack
                  key={ key }
                  height={ heights[index] ?? 50 }
                  border="1px solid #fff"
                  borderRadius="15px"
                  overflow="hidden"
                  direction="column"
                  justifyContent={ 'center' }
                  alignItems={ 'center' }
                >
                  <Image src={ sprites[key] } alt={ key } priority height={ 130 } width={ 130 } />
                </Stack>
              );
            }) }
          </PokemonDetailsSpritesLayout>
        </Stack>
      </Box>
      <Box width="100%">
        <Typography>Dream World</Typography>
        <Stack width="100%" direction="row" justifyContent="center" alignItems="center">
          <Image
            src={ sprites.other['dream_world']['front_default'] }
            alt={ 'dream_world' }
            priority
            height={ 180 }
            width={ 180 }
          />
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
                    <Stack
                      key={ key }
                      height={ heights2[index] ?? 50 }
                      border="1px solid #fff"
                      borderRadius="15px"
                      overflow="hidden"
                      direction="column"
                      justifyContent={ 'center' }
                      alignItems={ 'center' }
                    >
                      <Image src={ key } alt={ key } priority height={ 90 } width={ 90 } />
                    </Stack>
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
                          <Stack
                            key={ key }
                            height={ heights3[index] ?? 50 }
                            border="1px solid #fff"
                            borderRadius="15px"
                            overflow="hidden"
                            direction="column"
                            justifyContent={ 'center' }
                            alignItems={ 'center' }
                            position="relative"
                          >
                            <Image src={ key } alt={ key } priority height={ 110 } width={ 110 } />
                          </Stack>
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
const heights3 = [126, 90, 130, 128, 180, 90, 130, 126, 130, 90];
