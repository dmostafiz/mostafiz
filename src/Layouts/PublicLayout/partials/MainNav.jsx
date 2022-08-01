import { Box, Button, Container, Flex, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link'

const MainNav = () => {
    return (
        <Box position='fixed' w='full' bg='' py={2}>
            <Container maxW='6xl'>
                <Flex justify='space-between' alignItems='center'>
                    <Box maxW='200px' maxH='50px'>
                        <Img src='/mostafiz2.png' />
                    </Box>

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

                    <Flex gap={3}>
                        <Button bg='white' rounded='full'>Sign In</Button>
                        <Button bg='green.500' color='white' rounded='full'>Create Account</Button>
                    </Flex>
                </Flex>


            </Container>
        </Box>
    );
}

export default MainNav;
