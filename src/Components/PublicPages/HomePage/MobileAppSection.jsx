import { Avatar, Box, Container, Flex, Icon, Image, Spacer, Tag, TagLabel, Text, Wrap } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Fade, Zoom } from 'react-reveal'

export default function MobileAppSection() {
    return (
        <Box bg='#f5f5f5' py={{ base: 18, lg: 6 }}>

            <Container maxW='6xl'>

                <Flex
                    direction={{
                        base: 'column-reverse',
                        lg: 'row'
                    }}

                    alignItems='center'
                    gap={10}
                >

                    <Box flex={{ base: '0', lg: '1' }}>

                        <Fade>
                            <Text as='h1' fontWeight='bold' fontSize={{ base: '28px', lg: '35px' }} lineHeight={{ base: '36px', lg: '40px' }}>
                                Cross platform native application for Android & IOS
                            </Text>

                            <Spacer h={4} />

                            <Text>Bring your app idea to more users by building with Flutter or React Native on iOS and Android simultaneously, without sacrificing features, quality, or performance. My dedicated team will take care.</Text>

                            <Spacer h={5} />

                            <Box>
                                <Wrap>
                                    <Box rounded='full' border='2px solid #54c5f8' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={1}>
                                            <Image
                                                src='https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>Flutter</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='2px solid #61dbfb' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>React Native</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #8cc84b' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://iconape.com/wp-content/files/kh/83759/svg/nodejs-icon.svg'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>NodeJs API</Text>
                                        </Flex>
                                    </Box>


                                    <Box rounded='full' border='1px solid #fcca3f' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>FireStore</Text>
                                        </Flex>
                                    </Box>

                                </Wrap>

                                <Spacer h={8} />

                                <Link href={`#`}>
                                    <a href={`#`}>
                                        <Flex alignItems='center' gap={2}>
                                            <Icon fontSize={20} as={BsArrowRightCircle} />
                                            <Text fontSize={'17px'} fontWeight={'semibold'} fontStyle='italic'>Want to learn more?</Text>
                                        </Flex>
                                    </a>
                                </Link>

                            </Box>
                        </Fade>

                    </Box>

                    <Box w={{ base: 'full', lg: '50%' }}>
                        <Box position='relative'>
                            <Fade right={{base: false, md: true}}>
                                <Image w='full' src='https://storage.googleapis.com/cms-storage-bucket/2f118a9971e4ca6ad737.png' />
                            </Fade>
                        </Box>
                    </Box>

                </Flex>
            </Container>


        </Box>
    )
}
