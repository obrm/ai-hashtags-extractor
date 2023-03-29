import { Container, Box, useBreakpointValue } from '@chakra-ui/react';

import { Header, TextInput, Footer, Modal } from './components';

const App = () => {
  const height = useBreakpointValue({ base: '110vh', md: '100vh' });

  return (
    <Box bg='gray.700' color='white' height={height} paddingTop={130}>
      <Container maxWidth='3xl' centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
      <Modal />
    </Box>
  );
};

export default App;