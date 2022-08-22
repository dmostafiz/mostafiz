import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';

const HowItWorks = () => {
    return (
        <PublicLayout>
            <Container maxW='6xl' py={5}>
                <Box w='full' p={3} bg='white' shadow='md'>
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
