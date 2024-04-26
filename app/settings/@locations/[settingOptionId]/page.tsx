import type { IPageProps } from '@/shared/models/page.models';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function SettingsLocationSelectedOptionPage({params}: IPageProps<{ settingOptionId: string}>) {
  return (
    <Stack>
      <Typography variant="h6"></Typography>
    </Stack>
  );
}
