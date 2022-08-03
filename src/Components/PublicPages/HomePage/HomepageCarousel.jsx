import { Box, Button, Container, Flex, Image, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function HomepageCarousel() {
    return (
        <Box w='full' bg='#2d3183' pb={10} pt={{ base: 16, md: 20, lg: 32 }}>

            <Container maxW='6xl' p={5}>

                <Flex direction={{
                    base: 'column',
                    lg: 'row'
                }}
                    gap={5}
                >

                    <Box flex={1}>

                        <Text color='yellow.400' fontSize={{ base: '38px', md: '50px', lg: '95px' }} lineHeight={1} fontWeight='bold'>I'm Mostafiz Rahaman</Text>

                        <Spacer h={8} />

                        <Text color='white' fontSize={{ base: '16px', md: '18px', lg: '22px' }}>A fulltime Freelance software programmer from Bangladesh. Basically, I offer innovative digital creations in full-stack solutions for web, mobile or desktop environments to simplify and automate any online based business.</Text>

                        <Spacer h={7} />

                        <Flex align='center' gap='2'>
                            <Image maxW='170px' src='/fiverr.png' />

                            <Button as='a' href='https://fiverr.com/dmostafiz' target='_blank' rel='noopener,norefferer' colorScheme='green' color='white' size='lg' shadow='sm' rounded='full'>
                                Find me on Fiverr
                            </Button>

                        </Flex>

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
                                I offer Cost Effective Digital Solutions based on my clients ideas. Everything starts from scratch and you have the ability to customize anything while developing your platform.
                            </Text>

                            <Spacer h={5} />

                            <Box bg='whiteAlpha.900' w='full' p={4} rounded='md'>
                                {/* <Text fontWeight='bold' fontSize='20px' color='gray.600'>I have expirtise in</Text> */}

                                {/* <Spacer h={3} /> */}

                                <Box>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Native & Web apps ( PWA, Android, IOS )
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Online business - Problems and solutions
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Blockchain technology (DAPP)
                                        </ListItem>
                                        {/* You can also use custom icons from react-icons */}
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            Ecommerce, Affiliates, and MLM solutions
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='green.500' />
                                            EdTech, Finteck and other solutions
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
