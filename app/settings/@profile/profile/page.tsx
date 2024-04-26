import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function SettingsFavoritesProfilePage() {
  return (
    <Stack spacing={ 3 }>
      <Typography>Edit your personal data.</Typography>
      <TextField placeholder="Name" variant="outlined" />
      <TextField placeholder="Age" variant="outlined" />
    </Stack>
  );
}
