import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/light-bulb.svg';

import React from 'react';

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom='1rem' />
      <Heading marginBottom='1rem' color="gray.500">
        AI Hashtags Extractor
      </Heading>
      <Text fontSize={25} textAlign='center' color="gray.300">
        Paste in your text bellow and we'll extract hashtags from it.
      </Text>
    </>
  );
};

export default Header;