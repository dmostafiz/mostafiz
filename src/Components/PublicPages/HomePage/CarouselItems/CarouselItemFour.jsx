import { Box, Button, Container, Flex, Image, List, ListIcon, ListItem, Spacer, Text, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RightCardBoard from './RightCardBoard'

export default function CarouselItemFour({ bgImage }) {

    return (

        <Box flex={1} textAlign='left'>

            <Spacer h={{ base: 0, md: 8 }} />


            <Box>

                <Text
                    bgGradient='linear(to-r, #ffd801, #ebd8bc)'
                    bgClip='text'
                    textShadow=''
                    fontFamily={`'Fugaz One', cursiv`}
                    // color='yellow.400'
                    fontSize={{ base: '50px', md: '70px', lg: '70px' }}
                    lineHeight={{ base: '50px', md: '75px' }}
                    fontWeight='normal'>
                    We are MERN stack specialist
                </Text>

            </Box>

            <Spacer h={5} />

            <Text color='white' fontSize={{ base: '16px', md: '18px', lg: '20px' }}>A fulltime Freelance software programmer from Bangladesh. I offer innovative digital solutions in full-stack development for web, mobile or desktop environments to simplify digital business.</Text>

            <Spacer h={10} />

            <Flex justify={'left'} align='center' gap='2'>
                <Image maxW='170px' src='/fiverr.png' />

                <Button as='a' href='#' target='_blank' rel='noopener,norefferer' _hover={{ bg: '#1ec7b2' }} bg='#33d0bb' color='white' size='lg' shadow='sm' rounded='full'>
                    Get Started Today
                </Button>

            </Flex>

        </Box>
    )
}