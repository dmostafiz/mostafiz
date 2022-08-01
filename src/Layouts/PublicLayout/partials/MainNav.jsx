import { Box, Button, Container, Flex, IconButton, Img, Link, Show, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'
import {HiMenuAlt3} from 'react-icons/hi'
import MobileMenu from './MobileMenu';
import MainLogo from '../../../Components/Common/MainLogo';

const MainNav = () => {
    return (
        <Box position='fixed' w='full' bg='' py={2}>

            <Container maxW='6xl'>

                <Flex justify='space-between' alignItems='center'>

                    <Box maxW={{ base: '130', lg: '200px' }} maxH='50px'>
                        <MainLogo />
                    </Box>

                    <Show above='lg'>
                        <Flex gap={6} color='white'>

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
                            <Button colorScheme='green' bg='green.500' color='white' rounded='full'>Create Account</Button>
                        </Flex>
                    </Show>

                    <Show below='md'>
                        <Flex gap={3}>
                            <MobileMenu />
                        </Flex>
                    </Show>
                </Flex>


            </Container>
        </Box>
    );
}

export default MainNav;
