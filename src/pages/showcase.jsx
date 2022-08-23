import { Box, Center, Container, Flex, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from "framer-motion";

const Showcase = () => {

    const data = [
        {
            image: '/showcase/1.jpg',
            title: 'This website',
            url: 'https://mostafiz.dev'
        },

        {
            image: '/showcase/2.jpg',
            title: 'Forced matrix MLM web application',
            url: 'https://testweb.com'
        },

        {
            image: '/showcase/3.jpg',
            title: 'Spatial Community',
            url: 'https://spacom.herokuapp.com'
        },

        {
            image: '/showcase/5.png',
            title: 'My bill plan - Unilevel MLM web application',
            url: 'https://mybillplan.net'
        },

        {
            image: '/showcase/7.jpg',
            title: 'Frechk Food delivery',
            url: 'https://frechk.com'
        },

    ]

    return (
        <PublicLayout>
            <Container maxW='6xl' py={5}>

                <Box w='full' h='auto' p={5} bg='white' shadow='md'>
                    <SectionTitle
                        title='Showcase'
                        subTitle="Check hundreds of projects that have built on our hands"
                    />

                    <Spacer h={5} />

                    <Box overflow={'hidden'}>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
                        >
                            <Masonry
                                gutter='25px'
                            >

                                {data.map((mes, index) => {
                                    return <Box role="group" key={index}>
                                        <Box _groupHover={{ rounded: '3xl' }} position='relative' overflow='hidden' borderColor='blackAlpha.200' shadow='md' w='full'>

                                            <Image _groupHover={{ rounded: '3xl' }} transition='.3s linear' zIndex={50} position='relative' w='full' src={mes.image} />

                                            <Box
                                                as={motion.div}
                                                position='absolute'
                                                top={0}
                                                // zIndex={0}
                                                w='full'
                                                h='full'
                                                bg='blackAlpha.50'
                                                transition='.3s linear'
                                                _groupHover={{
                                                    bg: 'blackAlpha.800',
                                                    zIndex: 99,
                                                    shadow: '2xl',
                                                    rounded: '3xl'
                                                }}
                                            >
                                                <Center w='full' h='full'>
                                                    <Flex direction='column' alignItems='center' px={5} textAlign='center' gap={3}>
                                                        <Text color='whiteAlpha.800' fontSize='32px' lineHeight='36px' fontWeight='semibold'>{mes.title}</Text>
                                                        <Link href={mes.url} target='_blank'>
                                                            <Text color='blue.300'>{mes.url}</Text>
                                                        </Link>
                                                    </Flex>
                                                </Center>

                                            </Box>
                                        </Box>
                                    </Box>
                                })}


                            </Masonry>
                        </ResponsiveMasonry>

                    </Box>


                </Box>

            </Container>
        </PublicLayout>
    );
}

export default Showcase;
