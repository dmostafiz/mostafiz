import { Box, Container, Flex, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal'
import SocialLinks from '../../Components/Common/SocialLinks'
import MainNav from './partials/MainNav'

export default function PublicLayout({ children }) {
  return (
    <Box
      bgImage='https://images.unsplash.com/photo-1468174578019-d2e029959f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      // bg='blackAlpha.50'
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize={`cover`}
      // bgBlendMode='hue'

      backgroundAttachment='fixed'
    >

      <MainNav />

      <Fade>
        <Box>{children}</Box>
      </Fade>

      <Box
        w='full'
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      // alignContent='flex-end'
      >


        <Box
          bg='white'
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>2022 © #Mostafiz Rahaman# All rights reserved</Text>
            <SocialLinks />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
