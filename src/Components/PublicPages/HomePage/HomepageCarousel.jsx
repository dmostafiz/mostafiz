import { Box, Button, Container, Flex, Image, List, ListIcon, ListItem, Spacer, Text, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { MdCheckCircle } from 'react-icons/md'
// import { Fade } from 'react-reveal'
// import ItemOne from './CarouselItems/ItemOne'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Zoom, EffectFade, EffectCoverflow, Autoplay , Parallax, EffectCards, EffectCreative} from 'swiper';
// import ItemTwo from './CarouselItems/ItemTwo'
// import RightCardBoard from './CarouselItems/RightCardBoard'
import CarouselItemOne from './CarouselItems/CarouselItemOne'
import CarouselItemTwo from './CarouselItems/CarouselItemTwo';
import CarouselItemThree from './CarouselItems/CarouselItemThree';

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
            // bgImage={bgImage}
            // bgRepeat="no-repeat"
            // bgPosition="center"
            // bgSize={`cover`}
            // backgroundAttachment='fixed'
            pos='relative'
        // top='-82px'
        >


            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Lazy, Zoom,Parallax, EffectCards, EffectCreative, EffectFade, EffectCoverflow, Autoplay]}
                effect='fade'
                // spaceBetween={10}
                lazy={true}
                slidesPerView={1}
                // onSlideChange={() => setBgImage(images[Math.floor(Math.random() * images.length)])}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true
                }}

            
                zoom={true}
                // navigation
            
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                <SwiperSlide><CarouselItemOne bgImage={bgImage} /> </SwiperSlide>
                <SwiperSlide><CarouselItemTwo bgImage={bgImage} /> </SwiperSlide>
                <SwiperSlide><CarouselItemThree bgImage={bgImage} /> </SwiperSlide>

            </Swiper>

        </Box>
    )
}
