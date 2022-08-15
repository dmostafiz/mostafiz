import { Box, Button, Container, Flex, Image, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function HomepageCarousel() {

    const images = [
        'https://www.geteducated.com/wp-content/uploads/2022/01/iStock-875241826-1140x400.jpg',
        'https://media.istockphoto.com/photos/young-handsome-male-20-years-old-in-eyeglasses-sitting-at-street-cafe-picture-id1152207180?k=20&m=1152207180&s=612x612&w=0&h=5UjGpJjNtfeOfOLHXVPPfuyz7Unk6BFmb-iHqxhijzw=',
        'https://blog.payoneer.com/wp-content/uploads/2017/09/Top-freelancing-countries-2-1280x720.jpg',
        'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/10/02072937/Freelancer-start-1024x512.png',
        'http://www.smbceo.com/wp-content/uploads/2018/01/happy-freelancer.jpg',
        'https://cdn.elearningindustry.com/wp-content/uploads/2018/12/10-best-productivity-apps-for-freelancers-and-bloggers-1024x574.jpg',
        'https://blog.payoneer.com/wp-content/uploads/2020/03/Freelancer-Taxes-2.jpg'
    ]

    const [bgImage, setBgImage] = useState(images[Math.floor(Math.random() * images.length)])

    useEffect(() => {
        const intervel = setInterval(() => {
            setBgImage(images[Math.floor(Math.random() * images.length)])
        }, 20000)
        return () => {
            clearInterval(intervel)
        };
    }, []);

    return (
        <Box
            bgImage={bgImage}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize={`cover`}
            // bgBlendMode='hue'
            // bgGradient=''
            backgroundAttachment='fixed'
            pos='relative'
            top='-82px'
        >
            <Box w='full' bgGradient='linear(to-r, #000000cc, #2d3183cc)' backdropFilter='auto' backdropBlur='3px' pb={10} pt={{ base: '100px', md: '140px' }}>

                <Container maxW='6xl' p={5}>

                    <Flex direction={{
                        base: 'column',
                        lg: 'row'
                    }}
                        gap={5}
                    >

                        <Box flex={1}>

                            <Text
                                bgGradient='linear(to-r, #fbbf24, #ebd8bc)'
                                bgClip='text'
                                textShadow=''
                                fontFamily={`'Fugaz One', cursiv`}
                                // color='yellow.400'
                                fontSize={{ base: '50px', md: '70px', lg: '95px' }}
                                lineHeight={1}
                                fontWeight='normal'>
                                I`m Mostafiz Rahaman
                            </Text>

                            <Spacer h={5} />

                            <Text color='white' fontSize={{ base: '16px', md: '18px', lg: '22px' }}>A fulltime Freelance software programmer from Bangladesh. Basically, I offer innovative digital creations in full-stack solutions for web, mobile or desktop environments to simplify and automate any online based business.</Text>

                            <Spacer h={8} />

                            <Flex align='center' gap='2'>
                                <Image maxW='170px' src='/fiverr.png' />

                                <Button as='a' href='#' target='_blank' rel='noopener,norefferer' colorScheme='green' color='white' size='lg' shadow='sm' rounded='full'>
                                    Get Started Today
                                </Button>

                            </Flex>

                        </Box>

                        <Box width='50px' />

                        <Box width={{
                            base: 'full',
                            // md: '350px',
                            lg: '400px'
                        }}>
                            <Box w='full' bg='blackAlpha.500' p={5} rounded='md'>
                                <Text color='white' fontWeight='bold' fontSize='28px'>Why you should hire me?</Text>

                                <Spacer h={3} />

                                <Text color='white' >
                                    I have more than 7 years of extensive experience in participating in all phases of software development cycles. Very proficient in technology and writing code to build reliable and user-friendly systems.
                                </Text>

                                <Spacer h={5} />

                                <Box bg='whiteAlpha.900' w='full' p={4} rounded='md'>
                                    {/* <Text fontWeight='bold' fontSize='20px' color='gray.600'>I have expirtise in</Text> */}

                                    {/* <Spacer h={3} /> */}

                                    <Box>
                                        <List spacing={2}>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                                    Native & Web apps (PWA, Android, IOS)
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                                    Online business - Problems and solutions
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                                    Blockchain technology (DAPP)
                                                </Text>
                                            </ListItem>
                                            {/* You can also use custom icons from react-icons */}
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                                    Ecommerce, Affiliates, and MLM solutions
                                                </Text>
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                <Text as='span' fontSize={{ base: '14px', md: '16' }}>
                                                    EdTech, Fintech and other solutions
                                                </Text>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>


                                <Spacer h={5} />


                                <Button colorScheme='yellow' bg='yellow.400' size='lg' rounded='md' w='full'>HIRE ME TODAY</Button>

                            </Box>
                        </Box>

                    </Flex>

                </Container>
            </Box>
        </Box>
    )
}
