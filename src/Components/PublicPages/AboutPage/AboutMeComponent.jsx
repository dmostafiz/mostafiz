import { Box, Button, ButtonGroup, Center, Container, Flex, IconButton, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsFillPlayCircleFill, BsGithub, BsInstagram, BsLinkedin, BsPlayCircle, BsSkype, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import IntroVideoModal from '../../Common/IntroVideoModal'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Zoom, EffectFade, Autoplay } from 'swiper';
import SectionTitle from '../../Common/SectionTitle';
import SocialLinks from '../../Common/SocialLinks';

export default function AboutMeComponent() {
    return (
        <Box as='section' py={{ base: 0, lg: 8 }}>
            <Container maxW='6xl' p={5}>

                <Flex direction={{ base: 'column', lg: 'row' }} alignItems='center' gap={10}>

                    <Box position='relative' maxW={{
                        base: '100%',
                        lg: '50%'
                    }} bg='transparent'>
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
                            pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide><Image w='full' src='/img/mostafiz1.jpg' /></SwiperSlide>
                            <SwiperSlide><Image w='full' src='/img/mostafiz2.jpg' /></SwiperSlide>
                            <SwiperSlide><Image w='full' src='/img/mostafiz3.jpg' /></SwiperSlide>
                            {/* <SwiperSlide><Image w='full' src='/img/mostafiz4.jpg' /></SwiperSlide> */}
                            {/* <SwiperSlide><Image w='full' src='/img/mostafiz5.jpg' /></SwiperSlide> */}
                            {/* <SwiperSlide><Image w='full' src='/img/mostafiz6.jpg' /></SwiperSlide> */}
                            <SwiperSlide><Image w='full' src='/img/mostafiz7.jpg' /></SwiperSlide>
                            <SwiperSlide><Image w='full' src='/img/mostafiz8.jpg' /></SwiperSlide>

                        </Swiper>
                    </Box>

                    <Box flex='1'>
                        <Text fontWeight='semibold' letterSpacing='2px' fontSize='14px'>I'm Mostafiz</Text>

                        <Spacer h={3} />

                        <Text fontWeight='bold' letterSpacing='0px' lineHeight='38px' fontSize='32px'>
                            Doing freelance jobs in <br/>  fiverr & upwork
                        </Text>

                        <Spacer h={4} />

                        <Text color='gray.600' lineHeight='22px'>I believe, Customer satisfaction is all about a business success. Providing quality service can bring success to anyone, anywhere. So therefor i always try to listen my client's requirement, Finding best solutions for technical needs and implementation. im passionate in gaining knowledge in all phases of software development.</Text>

                        <Spacer h={4} />

                        {/* <hr /> */}

                        <SectionTitle
                            title='I am available in'
                            fontWeight='bold'
                            fontSize='14px'
                            spacing='0px'
                            fontFamily='sans-serif'

                        //   subTitle='I am available in social media like faceboo, linked in, instagram, etc.'
                        />

                        <SocialLinks />
                    </Box>

                </Flex>

                <Spacer h={10} />


                <Box p={8} bg={`whiteAlpha.900`} rounded='sm' shadow='md'>

                    <Text fontWeight='semibold' letterSpacing='2px' fontSize='14px'>Professional details</Text>

                    <Spacer h={1} />

                    <Text fontWeight='bold' letterSpacing='0px' lineHeight='38px' fontSize='32px'>Full-Stack Software engineer</Text>

                    <Spacer h={4} />

                    <Text color='gray.600' lineHeight='22px'>Having more than 7 years of extensive experience in participating in all phases of software development cycles. Very proficient in technology and writing code to build reliable and user-friendly systems. I'm passionate about developing innovative programs that expedite the efficiency and effectiveness of organizational success. possess strong attention to project details, well-developed time management skills, and the ability to complete all projects within schedule and in a timely manner. I specialize in JavaScript, TypeScript, Node-Js, and PHP. Especially Laravel, Express-Js, React-Js, and Database design (SQL and/or NoSQL like Mongo-DB or Fire-Store) these technologies. and also have adequate knowledge of WebSocket and WebRTC, Restful API, Version Controlling, Git, CI/CD, Docker, and Kubernetes. <br /><br /> I'm a skilled tech leader with having proven ability to motivate and manage a team of professionals to manage the software development life-cycle and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight its core competencies, and further its success</Text>
                    
                    <Spacer h={3} />

                    <Box pl={1}>
                        <SectionTitle
                            title='Here is my resume'
                            fontWeight='bold'
                            fontSize='14px'
                            spacing='0px'
                            fontFamily='sans-serif'

                        //   subTitle='I am available in social media like faceboo, linked in, instagram, etc.'
                        />
                    </Box>

                    <Button variant={`outline`} colorScheme={`blue`} rounded='full'>Resume_of_Mostafiz.pdf</Button>
                </Box>
            </Container>
        </Box>
    )
}
