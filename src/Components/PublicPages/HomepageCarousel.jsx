import { Box, Button, Container, Flex, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function HomepageCarousel() {
    return (
        <Box w='full' minH='100vh' bg='#2d3183' pt={{base: 20, md: 40}}>

            <Container maxW='6xl' p={5}>

                <Flex direction={{
                    base: 'column',
                    lg: 'row'
                }}
                    gap={5}
                >

                    <Box flex={1}>

                        <Text color='#fbbf24' fontSize={{base: '48', md:'50px', lg: '75px'}} lineHeight={1} fontWeight='bold'>Deploy your dream project</Text>

                        <Spacer h={8} />

                        <Text color='white' fontSize={{base: '18px', md:'20px', lg: '24px'}}>When a question comes with an online business, The first thought becomes on a website or mobile app. we develop any custom mobile app or website based on your idea business structure.</Text>

                        <Spacer h={7} />

                        <Button colorScheme='green' color='white' size={{base: 'md', md: 'lg'}} shadow='sm' rounded='full'>Create Account</Button>


                    </Box>

                    <Box width='50px' />

                    <Box width={{
                        base: 'full',
                        // md: '350px',
                        lg: '400px'
                    }}>
                        <Box w='full' bg='blackAlpha.500' p={5} rounded='md'>
                            <Text color='white' fontWeight='bold' fontSize='28px'>Why you should hire me?</Text>

                            <Spacer h={3} />

                            <Text color='white' >
                                I am working as a full-stack software developer with experience of 7 years.
                            </Text>

                            <Spacer h={5} />

                            <Box bg='whiteAlpha.900' w='full' p={4} rounded='md'>
                                <Text fontWeight='bold' fontSize='20px' color='gray.600'>I am currently working on</Text>

                                <Spacer h={5} />

                                <Box>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            The next generation Native Apps
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Online business with new concepts!
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Blockchain technology
                                        </ListItem>
                                        {/* You can also use custom icons from react-icons */}
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Ecommerce and Multi level Marketing
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>


                            <Spacer h={5} />


                            <Button colorScheme='yellow' bg='#fbbf24' size='lg' w='full'>HIRE ME TODAY</Button>

                        </Box>
                    </Box>

                </Flex>

            </Container>
        </Box>
    )
}
