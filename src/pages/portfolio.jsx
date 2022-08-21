import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import PublicLayout from '../Layouts/PublicLayout';

const Portfolio = () => {
    return (
        <PublicLayout>
            <Container minW='6xl'>
                <Text>Portfolio Page</Text>
            </Container>
        </PublicLayout>
    );
}

export default Portfolio;
