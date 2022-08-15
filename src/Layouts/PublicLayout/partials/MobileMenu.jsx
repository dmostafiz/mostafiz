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
                <DrawerContent bg='transparent' bgGradient='linear(to-r, #2372d6bd, #457ddd)' backdropFilter='auto' backdropBlur='10px'>
                    <DrawerCloseButton color='white'/>
                    <DrawerHeader>
                        <Box maxW='180px'>
                            <MainLogo />
                        </Box>
                    </DrawerHeader>

                    <DrawerBody bg=''>

                        {/* <Divider /> */}

                        <Input bg='blackAlpha.500' border='none' color='white' _focus={{border: '0px solid', ring: '0px'}} placeholder='Search here...' />

                        <Spacer h={5} />


                        <Flex direction='column' gap={3} color='blackAlpha'>

                            <NextLink href='/about_me'>
                                <Link href='/about_me'>
                                    <Text color='whiteAlpha.700' fontWeight='semibold'>About Me</Text>
                                </Link>
                            </NextLink>

                            <NextLink href='/about_me'>
                                <Link href='/about_me'>
                                    <Text color='whiteAlpha.700' fontWeight='semibold'>Projects</Text>
                                </Link>
                            </NextLink>

                            <NextLink href='/about_me'>
                                <Link href='/about_me'>
                                    <Text color='whiteAlpha.700' fontWeight='semibold'>My Achievments</Text>
                                </Link>
                            </NextLink>

                            <NextLink href='/about_me'>
                                <Link href='/about_me'>
                                    <Text color='whiteAlpha.700' fontWeight='semibold'>Tech Articles</Text>
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
