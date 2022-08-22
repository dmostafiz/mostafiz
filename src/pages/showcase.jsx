import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import SectionTitle from '../Components/Common/SectionTitle';
import PublicLayout from '../Layouts/PublicLayout';

const Showcase = () => {
    return (
        <PublicLayout>
            <Container maxW='6xl' py={5}>
                <Box w='full' p={3} bg='white' shadow='md'>
                    <SectionTitle
                        title='Showcase'
                        subTitle="Check hundreds of projects that have been built on our hands and operating successfully"
                    />

                </Box>

            </Container>
        </PublicLayout>
    );
}

export default Showcase;
