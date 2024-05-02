import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Games() {
  return (
    <Stack width="100%" direction="column" justifyContent="start" alignItems="start" spacing={ 2 } my={ 2 }>
      <Typography variant="h4">Past and Current Favorites Games</Typography>
    </Stack>
  );
}