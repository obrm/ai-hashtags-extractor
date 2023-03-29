import { Box, Image, Text, Flex } from '@chakra-ui/react';

import logo from '../../assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image
          marginRight={1}
          src={logo}
          alt="logo"
          width={5}
          borderRadius='md'
        />
        <Text color="gray.400">
          Powered by OpenAI
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;