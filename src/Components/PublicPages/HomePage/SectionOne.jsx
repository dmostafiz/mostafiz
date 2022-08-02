import { Box, Center, Container, Flex, IconButton, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillPlayCircleFill, BsPlayCircle } from 'react-icons/bs'


export default function SectionOne() {
    return (
        <Box as='section' pt={16}>
            <Container maxW='6xl' p={5}>
                <Flex direction={{ base: 'column', lg: 'row' }} alignItems='center' gap={10}>

                    <Box position='relative' maxW={{
                        base: '100%',
                        lg: '400px'
                    }}>
                        <Image w='full' src='/img/mostafiz2.jpg' rounded='xl' />
                        <Center position='absolute' w='full' h='full' bg='#2d31836b' rounded='xl' top='0'>
                            <IconButton variant='transparent' bg='transparent' size='xl' p={2} color='#e2e8f094' _hover={{ color: 'white' }} icon={<BsFillPlayCircleFill size={66} />} />
                        </Center>
                    </Box>

                    <Box flex='1'>
                        <Text fontWeight='semibold' letterSpacing='2px' fontSize='9px'>FULLSTACK DEVELOPMENT</Text>

                        <Spacer h={3} />

                        <Text fontWeight='bold' letterSpacing='0px' lineHeight='38px' fontSize='32px'>I have skills in <br />Coding, deployment, and maintenance</Text>

                        <Spacer h={4} />

                        <Text color='gray.600' lineHeight='22px'>We follow ideal software development strategy which bridges the gap between our developers & IT experts. We manage cloud deployments on container platform designed to quickly deploy applications and migrate applications for better optimization</Text>

                        <Spacer h={4} />

                        <SimpleGrid columns={{base: 4, lg: 6}} spacing={10}>
                            <Box>
                                <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519606/webexe/digitalocean_vjmp2x.png' />
                            </Box>
                            <Box>
                                <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519608/webexe/aws_io4ikd.png' />
                            </Box>
                            <Box>
                                <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519605/webexe/google_cloud_c8vcvr.png' />
                            </Box>
                            <Box>
                                <Image w='full' src='https://www.creativefreedom.co.uk/wp-content/uploads/2017/01/cpanel-logo.png' />
                            </Box>
                 
                        </SimpleGrid>

                    </Box>

                </Flex>
            </Container>
        </Box>
    )
}
