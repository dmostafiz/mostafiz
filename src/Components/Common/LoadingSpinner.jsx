import React from 'react'
import { Center, Flex, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'


export default function LoadingSpinner() {
    return (
        <Center height='full' w='full'>
            <Flex alignItems='center' gap={2}>
                <Spinner size='lg' />
                <Text>loading...</Text>
            </Flex>
        </Center>
    )
}
