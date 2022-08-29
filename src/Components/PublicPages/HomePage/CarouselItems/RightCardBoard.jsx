import { Box, Button, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function RightCardBoard() {
    return (
        <Box as={motion.div} role='group' w='full' bg='blackAlpha.500' p={5} rounded='md' textAlign={'left'}>

            <Text color='white' fontWeight='bold' fontSize='28px'>Why you should hire us?</Text>

            <Spacer h={3} />

            <Text color='white' fontSize={'13px'}>
                We are building fully customized mobile and web applications with 100% success rate on top marketplaces like Fiverr and Upwork. We maintain ideal phases of a software development process that makes our work successful & increasing our returning client
            </Text>

            <Spacer h={5} />

            <Box bg='whiteAlpha.900' w='full' p={4} rounded='md'>
                {/* <Text fontWeight='bold' fontSize='20px' color='gray.600'>I have expirtise in</Text> */}

                {/* <Spacer h={3} /> */}

                <Box>
                    <List spacing={2}>

                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <Text as='span' fontSize={{ base: '14px', md: '16px' }}>
                                Test Driven Development (TDD)
                            </Text>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <Text as='span' fontSize={{ base: '14px', md: '16px' }}>
                                Customization based on your feedback
                            </Text>
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <Text as='span' fontSize={{ base: '14px', md: '16px' }}>
                                Continuous Integration & deployment
                            </Text>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            <Text as='span' fontSize={{ base: '14px', md: '16px' }}>
                                Focused on performance & security
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </Box>


            <Spacer h={5} />


            <Button as={motion.button} whileHover={{ scale: 1 }} colorScheme='yellow' bg='yellow.400' size='lg' rounded='md' w='full'>
                GET A QUOTE !
            </Button>

        </Box>
    )
}
