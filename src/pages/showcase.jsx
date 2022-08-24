import { Box, Button, Center, Container, Flex, Image, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from "framer-motion";
import BreadCrumb from '../Components/Common/BreadCrumb';

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

        {
            image: '/showcase/12.png',
            title: 'Salient Demo',
            url: 'https://salient-demo.herokuapp.com'
        },

        {
            image: '/showcase/13.jpg',
            title: 'Tiflato - Realestate',
            url: 'https://tiflato-demo.vercel.app'
        },

        {
            image: '/showcase/15.jpg',
            title: 'Tiflato - Developer Dashboard',
            url: 'https://tiflato-demo.vercel.app'
        },

        {
            image: '/showcase/16.jpg',
            title: 'Tiflato - Buyer Dashboard',
            url: 'https://tiflato-demo.vercel.app'
        },


        {
            image: '/showcase/17.jpg',
            title: 'Tiflato - Admin Dashboard',
            url: 'https://tiflato-demo.vercel.app'
        },



        {
            image: '/showcase/14.jpg',
            title: 'Tiflato - Search',
            url: 'https://tiflato-demo.vercel.app'
        },


        {
            image: '/showcase/18.png',
            title: 'Webexe Platform - Custom CMS',
            url: 'https://webexe.vercel.app/sign-in'
        },
    ]

    return (
        <PublicLayout>


            <BreadCrumb links={[
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Showcase',
                    path: '/showcase'
                }
            ]} />


            <Container maxW='full' py={5}>

                <Box w='full' h='auto' p={3} bg='white' shadow='md'>
                    <SectionTitle
                        title='Showcase'
                        subTitle="Check out hundreds of our hand-built projects"
                    />

                    <Spacer h={5} />

                    <Box overflow={'hidden'}>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry
                                gutter='15px'
                            >

                                {data.map((mes, index) => {
                                    return <Box role="group" key={index}>
                                        <Box _groupHover={{ rounded: '3xl' }} rounded='xl' position='relative' overflow='hidden' borderColor='blackAlpha.200' shadow='md' w='full'>

                                            <Image _groupHover={{ rounded: '3xl' }} rounded='xl' transition='.3s linear' zIndex={50} position='relative' w='full' src={mes.image} />

                                            <Box
                                                as={motion.div}
                                                position='absolute'
                                                top={0}
                                                // zIndex={0}
                                                w='full'
                                                h='full'
                                                bg='blackAlpha.50'
                                                transition='.3s linear'
                                                rounded='xl'
                                                _groupHover={{
                                                    bg: 'blackAlpha.700',
                                                    zIndex: 99,
                                                    shadow: '2xl',
                                                    rounded: '3xl'
                                                }}
                                            >
                                                <Center w='full' h='full'>
                                                    <Flex direction='column' alignItems='center' px={5} textAlign='center' gap={3}>
                                                        <Text color='whiteAlpha.900' fontSize='24px' lineHeight='24px' fontWeight='semibold'>{mes.title}</Text>
                                                        <Link _hover={{
                                                            textDecoration: 'none'
                                                        }} href={mes.url} target='_blank'>
                                                            <Button size='sm' colorScheme='yellow'>Live project</Button>
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
