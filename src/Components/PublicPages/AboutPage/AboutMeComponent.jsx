import { Box, ButtonGroup, Center, Container, Flex, IconButton, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsFillPlayCircleFill, BsGithub, BsInstagram, BsLinkedin, BsPlayCircle, BsSkype, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import IntroVideoModal from '../../Common/IntroVideoModal'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Zoom, EffectFade, Autoplay } from 'swiper';
import SectionTitle from '../../Common/SectionTitle';

export default function AboutMeComponent() {
    return (
        <Box as='section' py={{ base: 0, lg: 16 }}>
            <Container maxW='6xl' p={5}>
                <Flex direction={{ base: 'column', lg: 'row' }} alignItems='center' gap={10}>

                    <Box position='relative' maxW={{
                        base: '100%',
                        lg: '400px'
                    }} bg='transparent' shadow='xl' rounded='xl'>
                        {/* <Image w='full' src='/img/mostafiz2.jpg' rounded='xl' /> */}
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, EffectFade, Autoplay]}
                            effect='fade'
                            // spaceBetween={10}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            autoplay={true}
                            zoom={true}
                            // navigation
                            // pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide><Image w='full' src='/img/mostafiz1.jpg' rounded='xl' /></SwiperSlide>
                            <SwiperSlide><Image w='full' src='/img/mostafiz2.jpg' rounded='xl' /></SwiperSlide>
                            <SwiperSlide><Image w='full' src='/img/mostafiz3.jpg' rounded='xl' /></SwiperSlide>
                            {/* <SwiperSlide><Image w='full' src='/img/mostafiz4.jpg' rounded='xl' /></SwiperSlide> */}
                            {/* <SwiperSlide><Image w='full' src='/img/mostafiz5.jpg' rounded='xl' /></SwiperSlide> */}
                            {/* <SwiperSlide><Image w='full' src='/img/mostafiz6.jpg' rounded='xl' /></SwiperSlide> */}
                            <SwiperSlide><Image w='full' src='/img/mostafiz7.jpg' rounded='xl' /></SwiperSlide>
                            <SwiperSlide><Image w='full' src='/img/mostafiz8.jpg' rounded='xl' /></SwiperSlide>

                        </Swiper>
                    </Box>

                    <Box flex='1'>
                        <Text fontWeight='semibold' letterSpacing='2px' fontSize='14px'>Mostafiz Rahaman</Text>

                        <Spacer h={3} />

                        <Text fontWeight='bold' letterSpacing='0px' lineHeight='38px' fontSize='32px'>Full-Stack Software engineer</Text>

                        <Spacer h={4} />

                        <Text color='gray.600' lineHeight='22px'>I am a full-stack web & mobile application developer, I have more than 7 years of experience in design and develop websites for companies, E-commerce, Business, etc. as a full-stack developer, I love to code in laravel, flutter, react, express and many more. I am fluently expert in laravel web app development, Rest API development, Flutter Mobile UI development and React, Vue Front-end development.</Text>

                        <Spacer h={4} />

                        <SectionTitle
                            title='I am available in'
                            fontWeight='bold'
                            fontSize='14px'
                            spacing='0px'
                            fontFamily='sans-serif'

                        //   subTitle='I am available in social media like faceboo, linked in, instagram, etc.'
                        />
                        <ButtonGroup variant='outline' spacing='3'>

                            <IconButton
                                as='a'
                                href='https://fb.com/mostafiz.dev'
                                target='_blank'
                                rel='noopener'
                                colorScheme='facebook'
                                variant='solid'
                                icon={<BsFacebook size={24} />}
                            />

                            <IconButton
                                as='a'
                                href='https://www.linkedin.com/in/mostafiz-rahaman-010a8913a/'
                                target='_blank'
                                rel='noopener'
                                colorScheme='linkedin'
                                variant='solid'
                                icon={<BsLinkedin size={24} />}
                            />


                            <IconButton
                                as='a'
                                href='https://www.youtube.com/channel/UC9gB6vHRs34i-By7hW5a6Kg'
                                target='_blank'
                                rel='noopener'
                                colorScheme='red'
                                variant='solid'
                                icon={<BsYoutube size={24} />}
                            />

                            <IconButton

                                as='a'
                                href='https://github.com/dmostafiz'
                                target='_blank'
                                rel='noopener'
                                colorScheme='black'
                                variant='outline'
                                icon={<BsGithub size={24} />}
                            />

                            <IconButton
                                as='a'
                                href='skype:live:.cid.d9d832a6070a1266?add'
                                // target='_blank'
                                // rel='noopener'
                                colorScheme='blue'
                                variant='solid'
                                icon={<BsSkype size={24} />}
                            />

                        </ButtonGroup>

                    </Box>

                </Flex>
            </Container>
        </Box>
    )
}
