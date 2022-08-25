import { Box, Button, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function RightCardBoard() {
    return (
        <Box width={{
            base: 'full',
            // md: '350px',
            lg: '400px'
        }}>
            <Box w='full' bg='blackAlpha.500' p={5} rounded='md'>
                <Text color='white' fontWeight='bold' fontSize='28px'>Why you should hire us?</Text>

                <Spacer h={3} />

                <Text color='white' >
                    I have more than 7 years of extensive experience in participating in all phases of software development cycles. Very proficient in technology and writing code to build reliable and user-friendly systems.
                </Text>

                <Spacer h={5} />

                <Box bg='whiteAlpha.900' w='full' p={4} rounded='md'>
                    {/* <Text fontWeight='bold' fontSize='20px' color='gray.600'>I have expirtise in</Text> */}

                    {/* <Spacer h={3} /> */}

                    <Box>
                        <List spacing={2}>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                    Native & Web apps (PWA, Android, IOS)
                                </Text>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                    Online business - Problems and solutions
                                </Text>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                    Blockchain technology (DAPP)
                                </Text>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                    Ecommerce, Affiliates, and MLM solutions
                                </Text>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='green.500' />
                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                    EdTech, Fintech and other solutions
                                </Text>
                            </ListItem>
                        </List>
                    </Box>
                </Box>


                <Spacer h={5} />


                <Button colorScheme='yellow' bg='yellow.400' size='lg' rounded='md' w='full'>HIRE ME TODAY, ITS EASY!</Button>

            </Box>
        </Box>
    )
}
