import React, { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    Link,
    Text,
    Input,
    Flex,
    Button,
    Spacer,
    Box,
    Divider,
} from '@chakra-ui/react'

import { HiMenuAlt3 } from 'react-icons/hi'
import NextLink from 'next/link'
import MainLogo from '../../../Components/Common/MainLogo'


export default function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            {!isOpen &&
                <IconButton
                    ref={btnRef}
                    onClick={onOpen}
                    bg='transparent'
                    colorScheme='blackAlpha'
                    color='white'
                    icon={<HiMenuAlt3 size={32} />}
                />
            }

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box maxW='180px'>
                            <MainLogo />
                        </Box>
                    </DrawerHeader>

                    <DrawerBody>

                        <Divider />

                        <Input placeholder='Type here...' />

                        <Spacer h={20} />


                        <Flex direction='column' gap={3} color='blackAlpha'>

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
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex gap={3}>
                            <Button colorScheme='green' bg='green.500' color='white' rounded='full'>Create Account</Button>
                            <Button colorScheme='yelow' bg='yellow.400' rounded='full'>Sign In</Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
