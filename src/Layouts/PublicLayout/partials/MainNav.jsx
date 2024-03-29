import { Alert, AlertDescription, Box, Button, CloseButton, Container, Flex, HStack, Link, Menu, MenuButton, MenuItem, MenuList, Show, Text, useDisclosure } from '@chakra-ui/react';
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
            {isOpen && <Alert bg='blue.400' color='blackAlpha.900' zIndex={999} variant='solid' py={{ base: 1, md: 0 }}>

                <Container maxW='full' px={0}>
                    <AlertDescription>
                        <Text lineHeight='18px' fontSize={{ base: '14px', md: '16px' }}>
                            This website is currently under development and containing dummy contents. Many awesome features are on the way to launch soon.
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
                    // bgGradient='linear(to-r, cyan.800, cyan.800)'
                    bg='whiteAlpha.800'
                    backdropFilter='auto'
                    backdropBlur='20px'
                    borderBottom='1.5px'
                    boxShadow='sm'
                    borderColor='blackAlpha.300'
                    py={2}
                >

                    <Container maxW='full'>

                        <Flex justify='space-between' alignItems='center'>

                            <Box maxW={{ base: '150', lg: '150px' }} maxH='50px'>
                                <NextLink href='/'>
                                    <Link href='/'>
                                        <MainLogo />
                                    </Link>
                                </NextLink>
                            </Box>

                            <Show above='lg'>
                                <Flex gap={0} color='blackAlpha.800'>


                                    <Menu>
                                        <MenuButton
                                            size='sm'
                                            bg={'transparent'}
                                            rounded='none'
                                            _hover={{
                                                bg: 'blackAlpha.300'
                                            }}
                                            _active={{
                                                bg: 'blackAlpha.400'
                                            }}
                                            as={Button}
                                            fontWeight='semibold'
                                        >
                                            Business
                                        </MenuButton>
                                        <MenuList color={'blackAlpha.900'} rounded='none'>
                                            <NextLink href='/about_me'>
                                                <MenuItem>Professional Details</MenuItem>
                                            </NextLink>
                                            <MenuItem>About The Team</MenuItem>
                                            <MenuItem>Services we offer</MenuItem>
                                        </MenuList>
                                    </Menu>


                                    <NextLink href='/showcase'>
                                        <Button
                                            size='sm'
                                            rounded='none'
                                            bg={'transparent'}
                                            _hover={{
                                                bg: 'blackAlpha.300'
                                            }}
                                            _active={{
                                                bg: 'blackAlpha.400'
                                            }}
                                            as='a'
                                            href='/showcase'
                                        >
                                            <Text fontWeight='semibold'>Showcase</Text>
                                        </Button>
                                    </NextLink>

                                    <NextLink href='/case_studies'>
                                        <Button
                                            size='sm'
                                            rounded='none'
                                            bg={'transparent'}
                                            _hover={{
                                                bg: 'blackAlpha.300'
                                            }}
                                            _active={{
                                                bg: 'blackAlpha.400'
                                            }}
                                            as='a'
                                            href='/case_studies'
                                        >
                                            <Text fontWeight='semibold'>Case Studies</Text>
                                        </Button>
                                    </NextLink>

                                    <NextLink href='/tech_articles'>
                                        <Button
                                            size='sm'
                                            rounded='none'
                                            bg={'transparent'}
                                            _hover={{
                                                bg: 'blackAlpha.300'
                                            }}
                                            _active={{
                                                bg: 'blackAlpha.400'
                                            }}
                                            as='a'
                                            href='/tech_articles'
                                        >
                                            <Text fontWeight='semibold'>Tech Articles</Text>
                                        </Button>
                                    </NextLink>


                                    <NextLink href='/how_it_works'>
                                        <Button
                                            size='sm'
                                            rounded='none'
                                            bg={'transparent'}
                                            _hover={{
                                                bg: 'blackAlpha.300'
                                            }}
                                            _active={{
                                                bg: 'blackAlpha.400'
                                            }}
                                            as='a'
                                            href='/how_it_works'
                                        >
                                            <Text fontWeight='semibold'>How it works?</Text>
                                        </Button>
                                    </NextLink>
                                </Flex>
                            </Show>

                            <Show above='lg'>
                                <Flex gap={3}>
                                    <NextLink href='/sign_in'>
                                        <Link href='/sign_in' bg='white' rounded='full' px={'3'} py={'2'}>Sign In</Link>
                                    </NextLink>

                                    <a href='https://client.mostafiz.dev/auth/register' >
                                        <Box bg='yellow.400' rounded='full' px={'3'} py={'2'}>
                                            Be a partner
                                        </Box>
                                    </a>

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