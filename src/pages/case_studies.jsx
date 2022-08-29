import { Box, Button, Container, Flex, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import BreadCrumb from '../Components/Common/BreadCrumb';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';

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

                    <SimpleGrid columns={{base: 1, sm: 2, lg:3}}  gap={2}>

                        {data.map((cs, index) => {
                            return <Flex key={index} direction={'row'} gap={3} justify='space-between' py={3} px={2}  w={'full'} bg='blackAlpha.300' dropShadow={'2xl'}>
                                
                                <Box w={'50%'} minH={'150px'} shadow='md' dropShadow='2xl' rounded='2xl'>

                                    <Image w='full' h='full' src={cs.image} rounded='2xl'/>

                                </Box>
                      

                                <Flex  direction={'column'} justify='space-between' w='50%' h={'full'} py={2}>

                                    <Text color='black' lineHeight={'20px'} fontWeight={'bold'} fontSize={'17px'}>{cs.title}</Text>

                                    <Spacer h={6} />

                                    <Flex>
                                        <Box>

                                        </Box>

                                        <Button size='sm' rounded='full' colorScheme='yellow'>Read Details</Button>
                                    </Flex>

                                </Flex>

                            </Flex>
                        })}



                    </SimpleGrid>

                </Box>

            </Container>
        </PublicLayout>
    );
}

export default CaseStudies;
