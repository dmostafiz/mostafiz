import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import BreadCrumb from '../Components/Common/BreadCrumb';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';

const CaseStudies = () => {
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

                </Box>

            </Container>
        </PublicLayout>
    );
}

export default CaseStudies;
