import { Box, Button, Container, Flex, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function HomepageCarousel() {
    return (
        <Box w='full' minH='calc(100vh - 50px)' bg='#2d3183' pt={{base: 16, md: 20, lg: 32}}>

            <Container maxW='6xl' p={5}>

                <Flex direction={{
                    base: 'column',
                    lg: 'row'
                }}
                    gap={5}
                >

                    <Box flex={1}>

                        <Text color='yellow.400' fontSize={{base: '38px', md:'50px', lg: '75px'}} lineHeight={1} fontWeight='bold'>I`m Mostafiz Rahaman</Text>

                        <Spacer h={8} />

                        <Text color='white' fontSize={{base: '16px', md:'18px', lg: '22px'}}>I am a freelance software programmer from Bangladesh. basically I design & develop fully customized fullstack solutions for Web, Mobile or Desktop environment to make any business easier and automated.</Text>

                        <Spacer h={7} />

                        <Button as='a' href='https://fiverr.com/dmostafiz' target='_blank' rel='noopener,norefferer' colorScheme='green' color='white' size={{base: 'md', md: 'lg'}} shadow='sm' rounded='full'>
                            Find me on fiverr
                        </Button>


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


                            <Button colorScheme='yellow' bg='yellow.400' size='lg' rounded='md' w='full'>HIRE ME TODAY</Button>

                        </Box>
                    </Box>

                </Flex>

            </Container>
        </Box>
    )
}
