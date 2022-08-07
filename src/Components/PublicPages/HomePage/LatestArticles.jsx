import { Badge, Box, Button, Center, Container, Divider, Flex, Image, Link, Show, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../Common/SectionTitle'
import NextLink from 'next/link'
import SoftLink from '../../Common/SoftLink'

export default function LatestArticles() {
    return (
        <Box as='section' py={5} bg='white'>
            <Container maxW='6xl' p={5}>

                <SectionTitle
                    title='Latest Articles'
                    subTitle="Read latest articles i written about modern technologies, business concepts and many more things"
                />

                <Box>
                    <Stack direction='column' gap={5}>

                        <Flex alignItems='flex-start' gap={{ base: 5, md: 8 }}>
                            <Box w={{ base: '190px', md: '330px' }}>
                                <Image
                                    w='full'
                                    rounded='xl'
                                    shadow='md'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs04ZVnZFCUUiAE5XJSLHSWsVcUM86DK99Og&usqp=CAU'
                                    alt='A detailed article about fiverr freelancing'
                                />
                            </Box>
                            <Box flex='1' mt={{ base: '0px', md: '5px' }}>
                                <SoftLink to={`/article/${'lorem_ipsum_dolor_sit_amet'}`}>
                                    <Text fontWeight='bold' fontSize={{ base: '17px', md: '24px' }} lineHeight={{ base: '20px', md: '30px' }}>A detailed article about fiverr freelancing</Text>
                                </SoftLink>

                                <Spacer h={{ base: 0, md: 2 }} />

                                <Flex alignItems={{base: '', md: 'center'}} gap={{base: '0', md: '3'}} direction={{base: 'column', md: 'row'}}>
                                    <Text as='i' fontWeight='thin' fontSize='14px'>Published 14 July, 2022</Text>
                                    <Link href='#'>
                                        <Badge variant='solid' colorScheme='green'> Fiverr Freelancing</Badge>
                                    </Link>
                                </Flex>

                                <Spacer h={1} />

                                <Show above='md'>
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro ab dignissimos provident soluta eius natus illo commodi libero, neque, minus eum adipisci quas magnam asperiores, reprehenderit sint a quisquam atque. Eaque in dolores aliquam perferendis aspernatur... <SoftLink to={`/article/${'lorem_ipsum_dolor_sit_amet'}`}>
                                        <Text as='span' color='#2d3183'>Continue Reading</Text>
                                    </SoftLink>
                                    </Text>
                                </Show>
                            </Box>
                        </Flex>

                        {/* <Divider /> */}

                        <Flex alignItems='flex-start' gap={{ base: 5, md: 8 }}>
                            <Box w={{ base: '190px', md: '330px' }}>
                                <Image
                                    w='full'
                                    rounded='xl'
                                    shadow='md'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6Jx2k9vXU_HptXpZISN3EUpWWpMEZYQaZw&usqp=CAU'
                                    alt='How does fiverr works & make money'
                                />
                            </Box>
                            <Box flex='1' mt={{ base: '0px', md: '5px' }}>
                                <SoftLink to={`/article/${'lorem_ipsum_dolor_sit_amet'}`}>
                                    <Text fontWeight='bold' fontSize={{ base: '17px', md: '24px' }} lineHeight={{ base: '20px', md: '30px' }}>How does fiverr works & make money</Text>
                                </SoftLink>

                                <Spacer h={{ base: 0, md: 2 }} />

                                <Flex alignItems={{base: '', md: 'center'}} gap={{base: '0', md: '3'}} direction={{base: 'column', md: 'row'}}>
                                    <Text as='i' fontWeight='thin' fontSize='14px'>Published 14 July, 2022</Text>
                                    <Link href='#'>
                                        <Badge variant='solid' colorScheme='green'> Fiverr Freelancing</Badge>
                                    </Link>
                                </Flex>

                                <Spacer h={1} />
                                <Show above='md'>
                                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus... <SoftLink to={`/article/${'lorem_ipsum_dolor_sit_amet'}`}><Text as='span' color='#2d3183'>Continue Reading</Text></SoftLink></Text>
                                </Show>
                            </Box>
                        </Flex>

                        {/* <Divider /> */}

                        <Flex alignItems='flex-start' gap={{ base: 5, md: 8 }}>
                            <Box w={{ base: '190px', md: '330px' }}>
                                <Image
                                    w='full'
                                    rounded='xl'
                                    shadow='md'
                                    src='https://www.codemotion.com/magazine/wp-content/uploads/2022/03/825bc6f1-4341-43ee-9ebe-21dc27378f80-896x504.png'
                                    alt='Fully custom web app develop with'
                                />
                            </Box>
                            <Box flex='1' mt={{ base: '0px', md: '5px' }}>

                                <SoftLink to={`/article/${'lorem_ipsum_dolor_sit_amet'}`}>
                                    <Text fontWeight='bold' fontSize={{ base: '17px', md: '24px' }} lineHeight={{ base: '20px', md: '30px' }}>Fully custom web app develop with</Text>
                                </SoftLink>

                                <Spacer h={{ base: 0, md: 2 }} />

                                <Flex alignItems={{base: '', md: 'center'}} gap={{base: '0', md: '3'}} direction={{base: 'column', md: 'row'}}>
                                    <Text as='i' fontWeight='thin' fontSize='14px'>Published 14 July, 2022</Text>
                                    <Link href='#'>
                                        <Badge variant='solid' colorScheme='green'>NextJs</Badge>
                                    </Link>
                                </Flex>

                                <Spacer h={1} />
                                <Show above='md'>
                                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus similique enim expedita laudantium necessitatibus... <SoftLink to={`/article/${'lorem_ipsum_dolor_sit_amet'}`}><Text as='span' color='#2d3183'>Continue Reading</Text></SoftLink></Text>
                                </Show>
                            </Box>
                        </Flex>

                        <Center>
                            <Button variant='yellow' maxW='300px' bg='yellow.400' rounded='full'>Read More Articles</Button>
                        </Center>

                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}
