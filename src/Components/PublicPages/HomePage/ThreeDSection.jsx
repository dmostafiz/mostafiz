import { Box, Container, Flex, Icon, Image, Show, Spacer, Text, Wrap } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import { Fade } from 'react-reveal'
import ThreeDCarModel from '../../ThreeD/ThreeDCarModel'

export default function ThreeDSection() {

    const { ref, inView } = useInView();

    const Show3DContent = () => {
        return <Fade left>

            <Text as='h1' fontWeight='bold' fontSize={{ base: '28px', lg: '35px' }} lineHeight={{ base: '36px', lg: '40px' }}>
                Let customers play with your products within the website
            </Text>

            <Spacer h={4} />

            <Text>Bring your app idea to more users by building with Flutter or React Native on iOS and Android simultaneously, without sacrificing features, quality, or performance. My dedicated team will take care.</Text>

            <Spacer h={5} />

            <Box>
                <Wrap>

                    <Box rounded='full' border='2px solid black' p={1} pl={2} pr={3}>
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
        </Fade>
    }

    return (
        <Box ref={ref} position={{ base: 'inherit', md: 'relative' }} bg='#ffd801' py={{ base: 18, lg: 0 }}>

            {/* <Container maxW='6xl'> */}
            <Flex
                direction={{
                    base: 'column',
                    lg: 'row'
                }}

                alignItems='center'

                gap={10}

                position='relative'
            >

                <Box flex={{ base: '0', lg: '1' }}>

                    <Show below='md'>
                        <Show3DContent />
                    </Show>

                </Box>



                <Box w={{ base: 'full', md: '50%' }} zIndex={99}>
                    <Fade right>
                        {inView &&
                            <ThreeDCarModel />
                        }
                    </Fade>

                </Box>


            </Flex>

            <Show above='md'>
                <Box position='absolute' w='full' top={'20%'}>
                    <Container maxW='6xl'>
                        <Flex
                            direction={{
                                base: 'column',
                                lg: 'row'
                            }}

                            alignItems='center'

                            gap={10}

                            position='relative'
                        >

                            <Box flex={{ base: '0', lg: '1' }}>

                                <Show3DContent />

                            </Box>



                            <Box w={{ base: 'full', md: '50%' }}>
                                {/* <Fade right>
                        <ThreeDCarModel />
                    </Fade> */}
                            </Box>

                        </Flex>


                    </Container>
                </Box>
            </Show>

        </Box>
    )
}
