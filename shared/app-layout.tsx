import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AppTopNavBar from './app-top-nav-bar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box width="100%">
      <AppTopNavBar />
      <Container maxWidth="lg">{ children }</Container>
    </Box>
  );
}
