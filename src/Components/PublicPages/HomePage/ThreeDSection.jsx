import { Box, Container, Flex, Icon, Image, Spacer, Text, Wrap } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

import dynamic from 'next/dynamic';

const ThreeDCarModel = dynamic(() => import('../../ThreeD/ThreeDCarModel'), {
    ssr: false,
    // suspense: true
})

// import ThreeDCarModel from '../../ThreeD/ThreeDCarModel'

export default function ThreeDSection() {



    return (
        <Box as='div' py={{ base: 5, md: 5 }} bg='#f2f2f2'>

            <Container maxW='6xl'>

                <Flex
                    direction={{
                        base: 'column-reverse',
                        lg: 'row'
                    }}
                    alignItems='center'
                    gap={{ base: 4, lg: 10 }}
                >

                    <Box flex={{ base: '0', lg: '1' }} py={{ base: '0px', md: '20px' }}>

                        <Text as='h1' fontWeight='bold' fontSize={{ base: '28px', lg: '35px' }} lineHeight={{ base: '36px', lg: '40px' }}>
                            Let customers play with your products within the web.
                        </Text>

                        <Spacer h={{ base: 1, lg: 4 }} />

                        <Text as='p' fontSize={{ base: '16px', md: '17px' }} fontWeight='normal'>
                            We are a dedicated team of highly creative people and doing a very good job in 3D product modeling for various companies. So why you don't hire us today to take care of yours?
                        </Text>

                        <Spacer h={5} />

                        <Box>
                            <Wrap>

                                <Box rounded='full' border='1px solid black' p={1} pl={2} pr={3}>
                                    <Flex alignItems='center' gap={2}>
                                        <Image
                                            src='http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png'
                                            w='25px'
                                            h='25px'
                                        />
                                        <Text fontSize='16px'>React Js</Text>
                                    </Flex>
                                </Box>

                                <Box rounded='full' border='1px solid black' p={1} pl={2} pr={3}>
                                    <Flex alignItems='center' gap={2}>
                                        <Image
                                            src='https://seeklogo.com/images/T/three-js-logo-07A32307F1-seeklogo.com.png'
                                            w='25px'
                                            h='25px'
                                        />
                                        <Text fontSize='16px'>Three Js</Text>
                                    </Flex>
                                </Box>


                                <Box rounded='full' border='1px solid black' p={1} pl={2} pr={3}>
                                    <Flex alignItems='center' gap={2}>
                                        <Image
                                            src='https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg'
                                            w='25px'
                                            h='25px'
                                        />
                                        <Text fontSize='16px'>Gsap</Text>
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


                    </Box>

                    <Box w={{ base: 'full', md: '50%' }} zIndex={99} py={{ base: 0, md: 0 }}>

                        <ThreeDCarModel />

                    </Box>

                </Flex>

            </Container>

        </Box>
    )
}
