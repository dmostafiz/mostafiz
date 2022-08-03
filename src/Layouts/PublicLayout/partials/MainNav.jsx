import { Box, Button, Container, Flex, IconButton, Img, Link, Show, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import MobileMenu from './MobileMenu';
import MainLogo from '../../../Components/Common/MainLogo';

const MainNav = () => {
    return (
        <Box
            w='full'
            position='fixed'
            // bg='#2d3183de'
            // backdropFilter='auto'
            // backdropInvert='80%'
            // backdropBlur='10px'
            zIndex={999}
        // py={2}
        >

            <Box
                w='full'
                bg='#2f855a'
                py={1}
            >
                <Container maxW='6xl'>
                    <Text fontWeight='normal' fontSize='14px' color='whiteAlpha.800'>Please be noted, This website is currently under development process, it`s containing many fake and dummy contents.</Text>
                </Container>
            </Box>
            <Box
                w='full'
                // position='fixed'
                bg='#2d3183de'
                backdropFilter='auto'
                // backdropInvert='80%'
                backdropBlur='10px'
                // zIndex={999}
                py={2}
                pt={4}
            >

                <Container maxW='6xl'>

                    <Flex justify='space-between' alignItems='center'>

                        <Box maxW={{ base: '150', lg: '250px' }} maxH='50px'>
                            <MainLogo />
                        </Box>

                        <Show above='lg'>
                            <Flex gap={6} color='whiteAlpha.700'>

                                <NextLink href='/about_me'>
                                    <Link href='/about_me'>
                                        <Text fontWeight='semibold'>About Me</Text>
                                    </Link>
                                </NextLink>

                                <NextLink href='/about_me'>
                                    <Link href='/about_me'>
                                        <Text fontWeight='semibold'>Projects</Text>
                                    </Link>
                                </NextLink>

                                <NextLink href='/about_me'>
                                    <Link href='/about_me'>
                                        <Text fontWeight='semibold'>My Achievments</Text>
                                    </Link>
                                </NextLink>

                                <NextLink href='/about_me'>
                                    <Link href='/about_me'>
                                        <Text fontWeight='semibold'>Tech Articles</Text>
                                    </Link>
                                </NextLink>
                            </Flex>
                        </Show>

                        <Show above='lg'>
                            <Flex gap={3}>
                                <Button bg='white' rounded='full'>Sign In</Button>
                                <Button colorScheme='yellow' bg='yellow.400' rounded='full'>Be Online Partner</Button>
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
        </Box>
    );
}

export default MainNav;
