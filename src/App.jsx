import { Container, Box } from '@chakra-ui/react';

import { Header, TextInput, Footer } from './components';

const App = () => {
  return (
    <Box bg='gray.700' color='white' height='100vh' paddingTop={130}>
      <Container maxWidth='3xl' centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;