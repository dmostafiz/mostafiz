import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import SocialLogin from '../Components/Common/SocialLogin';
import PublicLayout from '../Layouts/PublicLayout';

const SignIn = () => {
    return (
        <PublicLayout>
            <Container maxW='6xl'>
                <Box py='20px'>
                    <Box px='20px' py={'100px'} bg='white'>
                        <SocialLogin />
                    </Box>
                </Box>
            </Container>
        </PublicLayout>
    );
}

export default SignIn;
