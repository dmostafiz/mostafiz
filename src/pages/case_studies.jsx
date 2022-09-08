import { TimeIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Container, Flex, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import BreadCrumb from '../Components/Common/BreadCrumb';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';
import ReactStars from 'react-stars'

const CaseStudies = () => {

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

            <Box bg='white' h='full'>

                <BreadCrumb maxW='6xl' links={[
                    {
                        name: 'Home',
                        path: '/'
                    },
                    {
                        name: 'Case Studies',
                        path: '/case_studies'
                    }
                ]} />

                <Container maxW='6xl' py={3}>
                    <Box w='full' p={3} bg='white' shadow='sm'>
                        <SectionTitle
                            title='Case Studies'
                            subTitle="You will get details about our projects and keynotes"
                        />

                        <Spacer h={5} />

                        <Flex direction={{ base: 'column', md: 'column' }} gap={{ base: 5, md: 20 }}>

                            {data.map((cs, index) => {
                                return <Flex key={index} direction={{ base: 'column', md: 'row' }} justify='center' h='full' w={'full'} rounded='2xl' bg='blackAlpha.50' shadow={'sm'}>

                                    <Box w={{ base: 'full', md: '45%' }} h={{ base: '150px', md: '320px' }} bgImage={cs.image}>
                                        <Box w='full' h='full' bg='blackAlpha.400' backdropFilter='auto'
                                            backdropBlur='7px'>
                                            <Image w='full' h='full' src={cs.image} rounded='xl' objectFit='contain' alt='Image' />
                                        </Box>
                                    </Box>


                                    <Flex flex='1' direction={'column'} justify='space-between' p={{ base: 2, md: 6 }} >

                                        <Box>
                                            <Text color='black' lineHeight={{ base: '20px', md: '20px' }} fontWeight={'bold'} fontSize={{ base: '16px', md: '24px' }}>
                                                {cs.title}
                                            </Text>

                                            <Spacer h={2} />

                                            <Flex alignItems={{ base: 'flex-start', md: 'center' }} gap={1}>
                                                <TimeIcon />
                                                <Text fontSize={{ base: '10px', md: '13px' }}>Development Time (15 June 2022 - 08 July 2022) 24 days</Text>
                                            </Flex>

                                            <Spacer h={3} />

                                            <Box w={'auto'} rounded={{ base: 'sm', md: 'md' }} p={{ base: 1, md: 2 }} bg='blue.50' border='1px' borderColor='blue.100'>
                                                <Flex direction={{ base: 'row', md: 'row' }} alignItems={{ base: 'flex-start', md: 'flex-start' }} gap={{ base: 1, md: 3 }}>
                                                    <Avatar size={{ base: 'sm', md: 'lg' }} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                                    <Box>
                                                        <Text color={'blue.800'} fontSize={{ base: '12px', md: '17px' }} fontWeight={'bold'}>Dan Abrahmov</Text>
                                                        <Text color={'blue.700'} fontSize={{ base: '8px', md: '12px' }}>CEO, Solid ideas empower LTD</Text>

                                                        <Flex gap={1}>
                                                            <Text fontSize={'12px'} fontWeight={'black'}>5 star rating</Text>
                                                            <ReactStars
                                                                size={12}
                                                                onChange={() => { alert('Rating clicked') }}
                                                                count={5}
                                                                value={5}
                                                                edit={false}
                                                                color2={'#ecc94b'}
                                                            />
                                                        </Flex>
                                                    </Box>
                                                </Flex>
                                            </Box>

                                            <Box pb={3} pt={2}>
                                                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et inventore sapiente doloremque ex sequi, nam magni ullam ad eos nisi.</Text>
                                            </Box>
                                        </Box>



                                        <Box>
                                            <Button size={{ base: 'sm', md: 'sm' }} rounded='none' colorScheme='yellow'>Read Details</Button>
                                        </Box>

                                    </Flex>

                                </Flex>
                            })}



                        </Flex>

                    </Box>

                </Container>
            </Box>

        </PublicLayout>
    );
}

export default CaseStudies;
