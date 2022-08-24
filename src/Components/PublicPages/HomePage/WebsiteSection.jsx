import { Box, Container, Flex, Icon, Image, Spacer, Text, useBreakpointValue, Wrap } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Fade, Zoom } from 'react-reveal'

export default function WebsiteSection() {

    const fade = useBreakpointValue({
        base: false,
        md: true
    })

    return (
        <Box bg='white' py={{ base: 18, lg: 6 }}>

            <Container maxW='6xl'>

                <Flex
                    direction={{
                        base: 'column',
                        lg: 'row'
                    }}

                    alignItems='center'

                    gap={10}
                >

                    <Box w={{ base: 'full', md: '50%' }}>

                        <Fade>
                            <Image w='full' src='https://storage.googleapis.com/cms-storage-bucket/2c3d5baa79bb1e48c6e3.png' />
                        </Fade>

                    </Box>

                    <Box flex='1'>

                        <Fade>

                            <Text as='h1' fontWeight='bold' fontSize={{ base: '28px', lg: '35px' }} lineHeight={{ base: '36px', lg: '40px' }}>
                                Highly scalable websites & cloud applications
                            </Text>

                            <Spacer h={5} />


                            <Text>Reach more users with a modern web application to make your business more easier & automated. A team of professionals will build your web application step by step in a managed time frame</Text>

                            <Spacer h={5} />

                            <Box>
                                <Wrap spacing={3}>
                                    <Box rounded='full' border='1px solid #61dbfb' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>React Js</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #000000' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>Next Js</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #8cc84b' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://iconape.com/wp-content/files/kh/83759/svg/nodejs-icon.svg'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>ExpressJs</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #f05340' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>Laravel</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #010101' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/240px-Socket-io.svg.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>WebSocket</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #47a548' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://g.foolcdn.com/art/companylogos/square/mdb.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>MongoDB</Text>
                                        </Flex>
                                    </Box>

                                    <Box rounded='full' border='1px solid #b8cad6' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://www.svgrepo.com/show/303251/mysql-logo.svg'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>MySql</Text>
                                        </Flex>
                                    </Box>


                                    <Box rounded='full' border='1px solid #bd2117' p={1} pl={2} pr={3}>
                                        <Flex alignItems='center' gap={2}>
                                            <Image
                                                src='https://meterpreter.org/wp-content/uploads/2017/09/redis-1.png'
                                                w='25px'
                                                h='25px'
                                            />
                                            <Text fontSize='16px'>Redis</Text>
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

                </Flex>
            </Container>


        </Box>
    )
}
