import { useState } from 'react';

import { Textarea, Button, useToast } from '@chakra-ui/react';

import { useGlobalContext } from '../../context/context';

const TextInput = () => {
  const [text, setText] = useState('');
  const { extractHashtags } = useGlobalContext();

  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty',
        description: 'Please enter some text to extract hashtags',
        status: 'error',
        position: 'top',
        duration: 2000,
        isClosable: false
      });
    } else {
      extractHashtags(text);
    }
  };

  return (
    <>
      <Textarea
        backgroundColor='gary.200'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button bg='gray.600' _hover={{ bg: 'gray.800', color: 'gray.500' }} color='gray.300' marginTop={12} onClick={submitText}>Extract Hashtags</Button>
    </>
  );
};

export default TextInput;;