import { Box, Button, Container, Flex, Image, List, ListIcon, ListItem, Spacer, Text, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RightCardBoard from './RightCardBoard'

export default function CarouselItemTwo({ bgImage }) {

    return (


        <Box w='full' textAlign='left'>

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
                    Get Unlimited Revisions
                </Text>

            </Box>

            <Spacer h={5} />

            <Text color='white' fontSize={{ base: '16px', md: '18px', lg: '20px' }}>
                Your satisfaction is our number one focus. In that case, we provide unlimited revisions after completing a project until you are satisfied with our job.
            </Text>

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
