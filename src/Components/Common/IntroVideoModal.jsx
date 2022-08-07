import { AspectRatio, Button, IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


export default function IntroVideoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton onClick={onOpen} rounded='full' variant='transparent' bg='transparent' size='lg' p={2} color='#e2e8f094' _hover={{ color: 'white' }} icon={<BsFillPlayCircleFill size={56} />} />


            <Modal size={{base: 'md', md: '6xl'}} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent pos='relative'>
   
                    <ModalCloseButton size='sm' bg='yellow.500' _hover={{bg: 'yellow.600', color: 'black'}} _active={{bg: 'yellow.600', color: 'black'}} rounded='full' pos='absolute' top='-8px' right='-8px' zIndex={999} p={3} />
                    <ModalBody p={0}>
                        <AspectRatio minW='full' ratio={16 / 9}>
                            <iframe
                                title='naruto'
                                src='https://www.youtube.com/embed/5tO8sHPP-bA'
                                allow="autoplay" 
                                allowFullScreen
                            />
                        </AspectRatio>
                        {/* <Lorem count={2} /> */}
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}
