import startCase from 'lodash/startCase';
import type { PokemonSingleEncounter } from '@/shared/models/pokemon';
import { getSinglePokemonLocationEncounter } from '@/lib/api/pokemon-data.api';

import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default async function PokemonDetailsLocationAreaDisplay({ id }: { id: string }) {
  const encounters: PokemonSingleEncounter[] = await getSinglePokemonLocationEncounter(id);
  const encountersSortedByAverageMaxChance = encounters.sort((a, b) => {
    const averageMaxChanceA =
      a.version_details.reduce((acc, versionDetail) => acc + versionDetail.max_chance, 0) / a.version_details.length;
    const averageMaxChanceB =
      b.version_details.reduce((acc, versionDetail) => acc + versionDetail.max_chance, 0) / b.version_details.length;

    return averageMaxChanceB - averageMaxChanceA;
  });

  if (encounters.length === 0) {
    return (
      <Paper variant="elevation" elevation={ 0 } sx={ { p: 1 } }>
        <Alert severity="warning">
          <Stack direction="column" spacing={ 2 }>
            <Typography variant="body1">No location encounters found for this Pokemon.</Typography>
          </Stack>
        </Alert>
      </Paper>
    );
  }

  return (
    <Paper variant="elevation" elevation={ 0 } sx={ { p: 1 } }>
      <Stack direction="column" spacing={ 2 }>
        { encountersSortedByAverageMaxChance.map((encounter: PokemonSingleEncounter, index: number) => {
          const versionDetailsSortedByMaxChance = encounter.version_details.sort((a, b) => b.max_chance - a.max_chance);
          const averageMaxChance =
            versionDetailsSortedByMaxChance.reduce((acc, versionDetail) => acc + versionDetail.max_chance, 0) /
            versionDetailsSortedByMaxChance.length;

          return (
            <Paper key={ encounter.location_area.url } variant="outlined" sx={ { p: 2 } }>
              <Stack direction="column" spacing={ 2 }>
                <Stack direction="row" justifyContent="start" spacing={ 0.5 }>
                  <Typography variant="body1" fontWeight={ 500 }>
                    { startCase(encounter.location_area.name) }
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    : average chance: { parseFloat(averageMaxChance.toFixed(2)) }%
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="start" alignItems="center" flexWrap="wrap" gap={ 1 }>
                  { versionDetailsSortedByMaxChance.map((versionDetail, index2: number) => {
                    const versionDetailData = encounter.version_details[index2];
                    return (
                      <Chip
                        key={ versionDetailData.version.url }
                        label={
                          <Stack spacing={ 0.25 } width="100%" direction="row" justifyContent="start">
                            <Typography variant="body0" fontWeight={ 500 }>
                              { startCase(versionDetail.version.name) }
                            </Typography>
                            <Typography variant="body0" fontWeight={ 500 }>
                              ({ versionDetail.max_chance }%)
                            </Typography>
                          </Stack>
                        }
                        size="small"
                        sx={ {
                          backgroundColor: `#e6f3ff`,
                          backgroundImage: getBackgroundGradientColorByPercentage(versionDetail.max_chance),
                          color: versionDetail.max_chance >= 100 ? 'white' : 'inherit',
                        } }
                      />
                    );
                  }) }
                </Stack>
              </Stack>
            </Paper>
          );
        }) }
      </Stack>
    </Paper>
  );
}

const getBackgroundGradientColorByPercentage = (percentage: number) => {
  if (percentage === 0) {
    return 'linear-gradient(70deg, #b3b3b3, #b3b3b3)';
  } else if (percentage > 0 && percentage < 11) {
    return 'linear-gradient(40deg, #d9d9d9, #fff)';
  } else if (percentage >= 11 && percentage < 25) {
    return 'linear-gradient(70deg, #ff8080, #f2f2f2)';
  } else if (percentage >= 25 && percentage < 50) {
    return 'linear-gradient(25deg, orange, #f2f2f2)';
  } else if (percentage >= 50 && percentage < 75) {
    return 'linear-gradient(70deg, yellow, #f2f2f2)';
  } else if (percentage >= 75 && percentage < 100) {
    return 'linear-gradient(25deg, #66ff66, #f2f2f2)';
  } else if (percentage === 100 || percentage > 100) {
    return 'linear-gradient(25deg, #009933, green)';
  }
};
