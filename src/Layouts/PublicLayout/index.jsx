import { Box, Container, Flex, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import SocialLinks from '../../Components/Common/SocialLinks'
import MainNav from './partials/MainNav'

export default function PublicLayout({ children }) {
  return (
    <Suspense fallback={() => <Text fontSize={'100px'} fontWeight='bold' color='black'>Loading...</Text>}>

      <MainNav />

      <Box minH={'calc(100vh - 140px)'} h='full'>
        {children}
      </Box>

      <Box
        w='full'
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      // alignContent='flex-end'
      >

        <Box
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

    </Suspense>
  )
}
