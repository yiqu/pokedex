import startCase from 'lodash/startCase';
import type { ILayoutProps } from '@/shared/models/page.models';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function SettingsLocationSelectedOptionLayout({
  params,
  children,
}: ILayoutProps<{ settingOptionId: string }>) {
  return (
    <Stack width="100%" spacing={ 2 } direction="column">
      <Typography variant="h6">Pokedex { startCase(params.settingOptionId) } Configurations</Typography>
      { children }
    </Stack>
  );
}
