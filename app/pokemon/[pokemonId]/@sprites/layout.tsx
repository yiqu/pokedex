import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function PokemonDetailsSpritesSlotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack width="100%" spacing={ 3 } direction="column">
      <Divider textAlign="left">
        <Typography variant="h5">Graphics</Typography>
      </Divider>
      { children }
    </Stack>
  );
}