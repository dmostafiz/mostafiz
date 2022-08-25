import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import BreadCrumb from '../Components/Common/BreadCrumb';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';

const HowItWorks = () => {
    return (
        <PublicLayout>

            <BreadCrumb maxW='6xl' links={[
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'How it works',
                    path: '/how_it_works'
                }
            ]} />

            <Container maxW='6xl' py={3}>
                <Box w='full' p={3} bg='white' shadow='sm'>
                    <SectionTitle
                        title='How it works?'
                        subTitle="Learn about the website and its awesome features"
                    />

                </Box>

            </Container>
        </PublicLayout>
    );
}

export default HowItWorks;
