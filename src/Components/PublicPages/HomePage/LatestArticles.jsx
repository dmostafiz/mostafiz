import { Badge, Box, Button, Center, Container, Divider, Flex, Image, Link, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../Common/SectionTitle'

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

                        <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' gap={{ base: 5, md: 8 }}>
                            <Box w={{ base: 'full', md: '300px' }}>
                                <Image w='full' rounded='xl' shadow='md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs04ZVnZFCUUiAE5XJSLHSWsVcUM86DK99Og&usqp=CAU' />
                            </Box>
                            <Box flex='1'>

                                <Text fontWeight='bold' fontSize='24px' lineHeight='30px'>A detailed article about fiverr freelancing</Text>

                                <Spacer h={2} />

                                <Text as='i' fontWeight='thin' fontSize='14px'>Published 14 July, 2022 on</Text> <Link href='#'>
                                    <Badge variant='solid' colorScheme='green'>Fiverr Freelancing</Badge>
                                </Link>

                                <Spacer h={1} />

                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro ab dignissimos provident soluta eius natus illo commodi libero, neque, minus eum adipisci quas magnam asperiores, reprehenderit sint a quisquam atque. Eaque in dolores aliquam perferendis aspernatur... <Link href='#'><Text as='span' color='#2d3183'>Continue Reading</Text></Link></Text>
                            </Box>
                        </Flex>

                        <Divider />

                        <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' gap={{ base: 5, md: 8 }}>
                            <Box w={{ base: 'full', md: '300px' }}>
                                <Image w='full' rounded='xl' shadow='md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6Jx2k9vXU_HptXpZISN3EUpWWpMEZYQaZw&usqp=CAU' />
                            </Box>
                            <Box flex='1'>

                                <Text fontWeight='bold' fontSize='24px' lineHeight='30px'>How does fiverr works & make money</Text>

                                <Spacer h={2} />

                                <Text as='i' fontWeight='thin' fontSize='14px'>Published 14 July, 2022 on</Text> <Link href='#'>
                                    <Badge variant='solid' colorScheme='green'>Fiverr Freelancing</Badge>
                                </Link>

                                <Spacer h={1} />

                                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus... <Link href='#'><Text as='span' color='#2d3183'>Continue Reading</Text></Link></Text>
                            </Box>
                        </Flex>

                        <Divider />

                        <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' gap={{ base: 5, md: 8 }}>
                            <Box w={{ base: 'full', md: '300px' }}>
                                <Image w='full' rounded='xl' shadow='md' src='https://www.codemotion.com/magazine/wp-content/uploads/2022/03/825bc6f1-4341-43ee-9ebe-21dc27378f80-896x504.png' />
                            </Box>
                            <Box flex='1'>

                                <Text fontWeight='bold' fontSize='24px' lineHeight='30px'>Fully custom web app develop with</Text>

                                <Spacer h={2} />

                                <Text as='i' fontWeight='thin' fontSize='14px'>Published 14 July, 2022 on</Text> <Link href='#'>
                                    <Badge variant='solid' colorScheme='green'>NextJs</Badge>
                                </Link>

                                <Spacer h={1} />

                                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus similique enim expedita laudantium necessitatibus... <Link href='#'><Text as='span' color='#2d3183'>Continue Reading</Text></Link></Text>
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
