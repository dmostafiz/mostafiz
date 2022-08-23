import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';

const CaseStudies = () => {
    return (
        <PublicLayout>
            <Container maxW='6xl' py={5}>
                <Box w='full' p={3} bg='white' shadow='md'>
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