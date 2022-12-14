import { Box, Container, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../Common/SectionTitle'

export default function Technologies() {
    return (
        <Box bg='whiteAlpha.500' as='section' py={{base:6, lg:16}}>

            <Container maxW='6xl' p={5}>

                <SectionTitle
                    title='Technologies we use'
                    // subTitle="Choose best technologies for your next project to build faster and for scalability"
                />

                <Spacer h={{base:0, lg:3}} />

                <SimpleGrid columns={{ base: 5, sm:5, md: 8, lg: 10 }} spacing={{ base: 2, lg: 4 }}>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519599/webexe/nodejs_t4bipc.png' />
                    </Box>

                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628528638/webexe/expressjs_in0mz8.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JKXP1vHLFwYoJGcZC7fHndMmlZS7EQrEGpwPuolvhwX3ymFKB6LSqJUXTg_s0PeEL9E&usqp=CAU' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519598/webexe/react_drhp4u.png' />
                    </Box>

                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519600/webexe/next_pnpgey.png' />
                    </Box>

                    {/* <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519596/webexe/vue_mesglz.png' />
                    </Box> */}

                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519598/webexe/nuxt_muxo5q.png' />
                    </Box>
                    {/* <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519625/webexe/angular_l7y2ae.png' />
                    </Box> */}
                    {/* <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519601/webexe/php_r4csga.png' />
                    </Box> */}
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519603/webexe/laravel_iikdbv.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519603/webexe/flutter_e2vts8.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519602/webexe/mongo_db_u91d4e.gif' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519611/webexe/mysql_n4aldo.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519604/webexe/firebase_cpohfw.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519611/webexe/docker_dktyxa.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519600/webexe/socket_s4itlp.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628527798/webexe/twilio_hjbyt4.png' />
                    </Box>
                    {/* <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519596/webexe/plivo_gklh4i.png' />
                    </Box> */}
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628521136/webexe/paypal_n7uklz.png' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519596/webexe/stripe_h3tco9.jpg' />
                    </Box>
                    <Box p={2} bg='white' shadow='md' rounded='xl'>
                        <Image w='full' src='https://res.cloudinary.com/dgzzionee/image/upload/v1628519606/webexe/coinpayments_sf1rtu.png' />
                    </Box>

                </SimpleGrid>
            </Container>
        </Box>
    )
}
