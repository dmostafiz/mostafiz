import { Box, Button, Container, Flex, Image, List, ListIcon, ListItem, Spacer, Text, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { MdCheckCircle } from 'react-icons/md'
// import { Fade } from 'react-reveal'
// import ItemOne from './CarouselItems/ItemOne'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Zoom, EffectFade, EffectCoverflow, Autoplay, Parallax, EffectCards, EffectCreative } from 'swiper';
// import ItemTwo from './CarouselItems/ItemTwo'
// import RightCardBoard from './CarouselItems/RightCardBoard'
import CarouselItemOne from './CarouselItems/CarouselItemOne'
import CarouselItemTwo from './CarouselItems/CarouselItemTwo';
import CarouselItemThree from './CarouselItems/CarouselItemThree';
import CarouselItemFour from './CarouselItems/CarouselItemFour';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RightCardBoard from './CarouselItems/RightCardBoard';

export default function HomepageCarousel() {

    const images = [
        'https://www.geteducated.com/wp-content/uploads/2022/01/iStock-875241826-1140x400.jpg',
        'https://media.istockphoto.com/photos/young-handsome-male-20-years-old-in-eyeglasses-sitting-at-street-cafe-picture-id1152207180?k=20&m=1152207180&s=612x612&w=0&h=5UjGpJjNtfeOfOLHXVPPfuyz7Unk6BFmb-iHqxhijzw=',
        'https://blog.payoneer.com/wp-content/uploads/2017/09/Top-freelancing-countries-2-1280x720.jpg',
        'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/10/02072937/Freelancer-start-1024x512.png',
        'http://www.smbceo.com/wp-content/uploads/2018/01/happy-freelancer.jpg',
        'https://cdn.elearningindustry.com/wp-content/uploads/2018/12/10-best-productivity-apps-for-freelancers-and-bloggers-1024x574.jpg',
        'https://blog.payoneer.com/wp-content/uploads/2020/03/Freelancer-Taxes-2.jpg'
    ]

    const [bgImage, setBgImage] = useState(images[Math.floor(Math.random() * images.length)])

    return (

        <Box
            // bgGradient='linear(to-r, #011f1dbf, #27aca5db)'
            bgImage={bgImage}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize={`cover`}
            backgroundAttachment='fixed'
            pos='relative'
            top='-82px'
        >
            <Box
                w='full'
                bgGradient='linear(to-r, #011f1dbf, #27aca5db)'
                backdropFilter='auto'
                backdropBlur='5px'
                pb={3}
                pt={{ base: '100px', md: '100px' }}
            >

                <Container maxW='6xl' py={5}>

                    <Flex
                        direction={{
                            base: 'column',
                            lg: 'row'
                        }}
                        gap={3}
                    // alignItems='center'
                    >

                        <Box w={{ base: 'full', lg: '60%' }}>
                            <Carousel
                                autoPlay={true}
                                dynamicHeight={false}
                                infiniteLoop={true}
                                showIndicators={false}
                                swipeable={true}
                                showStatus={true}
                                // centerMode={true}
                                emulateTouch={true}
                                showArrows={false}
                                navigateWithKeyboard={true}
                                onChange={() => setBgImage(images[Math.floor(Math.random() * images.length)])}
                                // axis='vertical'
                                autoFocus={true}
                                transitionTime={0}
                            >
                                <CarouselItemOne bgImage={bgImage} />
                                <CarouselItemTwo bgImage={bgImage} />
                                <CarouselItemThree bgImage={bgImage} />
                                <CarouselItemFour bgImage={bgImage} />
                            </Carousel>
                        </Box>

                        {/* <Box width='50px' /> */}

                        <Box width={{
                            base: 'full',
                            // md: '350px',
                            lg: '600px'
                        }}>
                            <RightCardBoard />
                        </Box>

                    </Flex>

                </Container>
            </Box>
        </Box>

    )
}
