import type { ILayoutProps } from '@/shared/models/page.models';

import Typography from '@mui/material/Typography';

export default function ProfileDefaultPage({ params }: ILayoutProps<{ settingOptionId: string }>) {
  return <Typography>This option { params.settingOptionId } is not applicable to your account profile.</Typography>;
}
