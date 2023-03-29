import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  useToast
} from '@chakra-ui/react';

import { useGlobalContext } from '../../context/context';

const HashtagsModal = () => {
  const { hashtags, loading, isOpen, closeModal } = useGlobalContext();

  const toast = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(hashtags.join(' '));
    toast({
      title: 'Copied to clipboard',
      description: 'Hashtags copied to clipboard',
      status: 'success',
      position: 'top',
      duration: 2000,
      isClosable: false
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>
            {loading ? (
              <CircularProgress isIndeterminate color='gray' />
            ) : (
                hashtags.map((hashtag) => (
                  <Text key={hashtag} padding='2px 5px' margin='1' borderRadius='5' backgroundColor='gray.300' > {hashtag}</Text>
                ))
            )}
          </ModalBody>

          <ModalFooter>
            {!loading && <Button variant='ghost' onClick={handleCopy}>Copy to clipboard</Button>}
            <Button colorScheme='gray' mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default HashtagsModal;