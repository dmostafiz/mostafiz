import { Alert, AlertDescription, Box, Button, CloseButton, Container, Flex, HStack, Link, Show, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'
import MobileMenu from './MobileMenu';
import MainLogo from '../../../Components/Common/MainLogo';
import { useRouter } from 'next/router';
import StickyBox from "react-sticky-box";

const MainNav = () => {


    const router = useRouter()

    const {
        isOpen,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true })

    return (

        <>
            {isOpen && <Alert bg='#ffd801' color='blackAlpha.900' zIndex={999} variant='solid' py={{ base: 1, md: 0 }}>

                <Container maxW='6xl'>
                    <AlertDescription>
                        <Text lineHeight='18px' fontSize={{ base: '14px', md: '16px' }}>
                            Please be noted! This website is currently under development process, it`s containing many fake and dummy contents.
                        </Text>
                    </AlertDescription>
                </Container>

                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    rounded='full'
                    onClick={onClose}
                />

            </Alert>
            }

            <StickyBox offsetTop={0} style={{ zIndex: 999 }}>

                <Box
                    w='full'
                    bgGradient='linear(to-r, #2372d6bd, #457ddd)'
                    backdropFilter='auto'
                    backdropBlur='20px'
                    py={2}
                >

                    <Container maxW='6xl'>

                        <Flex justify='space-between' alignItems='center'>

                            <Box maxW={{ base: '150', lg: '180px' }} maxH='50px'>
                                <NextLink href='/'>
                                    <Link href='/'>
                                        <MainLogo />
                                    </Link>
                                </NextLink>
                            </Box>

                            <Show above='lg'>
                                <Flex gap={0} color='whiteAlpha.700'>

                                    <NextLink href='/about_me'>
                                        <Link
                                            px={3}
                                            py={1}
                                            rounded='sm'
                                            _hover={{
                                                textDecoration: 'none',
                                                bg: 'blackAlpha.300',
                                            }}
                                            href='/about_me'
                                        // bg='blackAlpha.300'
                                        >

                                            <Text fontWeight='normal'>Business</Text>

                                        </Link>
                                    </NextLink>

                                    <NextLink href='/case_studies'>
                                        <Link
                                            px={4}
                                            py={1}
                                            rounded='sm'
                                            _hover={{
                                                textDecoration: 'none',
                                                bg: 'blackAlpha.300',
                                            }}
                                            href='/case_studies'
                                        >
                                            <Text fontWeight='normal'>Portfolio</Text>
                                        </Link>
                                    </NextLink>

                                    <NextLink href='/case_studies'>
                                        <Link
                                            px={4}
                                            py={1}
                                            rounded='sm'
                                            _hover={{
                                                textDecoration: 'none',
                                                bg: 'blackAlpha.300',
                                            }}
                                            href='/case_studies'
                                        >
                                            <Text fontWeight='normal'>Case Studies</Text>
                                        </Link>
                                    </NextLink>

                                    <NextLink href='/tech_articles'>
                                        <Link
                                            px={4}
                                            py={1}
                                            rounded='sm'
                                            _hover={{
                                                textDecoration: 'none',
                                                bg: 'blackAlpha.300',
                                            }}
                                            href='/tech_articles'
                                        >
                                            <Text fontWeight='normal'>Tech Articles</Text>
                                        </Link>
                                    </NextLink>


                                    <NextLink href='/how_it_works'>
                                        <Link
                                            px={4}
                                            py={1}
                                            rounded='sm'
                                            _hover={{
                                                textDecoration: 'none',
                                                bg: 'blackAlpha.300',
                                            }}
                                            href='/how_it_works'
                                        >
                                            <Text fontWeight='normal'>How it works?</Text>
                                        </Link>
                                    </NextLink>
                                </Flex>
                            </Show>

                            <Show above='lg'>
                                <Flex gap={3}>
                                    <NextLink href='/sign_in'>
                                        <Link href='/sign_in' bg='white' rounded='full' px={'3'} py={'2'}>Sign In</Link>
                                    </NextLink>

                                    <NextLink href='/sign_in'>
                                        <Link href='/sign_in' bg='yellow.400' rounded='full' px={'3'} py={'2'}>Be a partner</Link>
                                    </NextLink>
                                    {/* <Button colorScheme='yellow' bg='yellow.400' rounded='full'>Be a partner</Button> */}
                                </Flex>
                            </Show>

                            <Show below='lg'>
                                <Flex gap={3}>
                                    <MobileMenu />
                                </Flex>
                            </Show>
                        </Flex>

                    </Container>
                </Box>
            </StickyBox>
        </>
    );
}

export default MainNav