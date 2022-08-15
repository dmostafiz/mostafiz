import { Box, Center, Container, Flex, IconButton, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillPlayCircleFill, BsPlayCircle } from 'react-icons/bs'
import IntroVideoModal from '../../Common/IntroVideoModal'


export default function MySkills() {
    return (
        <Box as='section' mt={`-55px`} pb={{base: 0, lg: 10}}>
            <Container maxW='6xl' p={5}>
                <Flex direction={{ base: 'column', lg: 'row' }} alignItems='center' gap={10}>

                    <Box position='relative' maxW={{
                        base: '100%',
                        lg: '400px'
                    }}>
                        <Image w='full' src='/img/mostafiz2.jpg' rounded='sm' />
                        <Center position='absolute' w='full' h='full' bgGradient='linear(to-bl, #2372d661, #457dd157)' rounded='sm' top='0'>
                            <IntroVideoModal />
                        </Center>
                    </Box>

                    <Box flex='1'>
                        <Text fontWeight='semibold' letterSpacing='2px' fontSize='9px'>FULLSTACK DEVELOPMENT</Text>

                        <Spacer h={3} />

                        <Text fontWeight='bold' letterSpacing='0px' lineHeight='38px' fontSize='32px'>My skills in full-stack, <br />Coding, deployment, and maintenance</Text>

                        <Spacer h={4} />

                        <Text color='gray.600' lineHeight='22px'>I follow an ideal software development strategy that bridges the gap between me & my clients. basically manage cloud deployments on a container platform designed to quickly deploy applications and migrate applications for better optimization.</Text>

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
