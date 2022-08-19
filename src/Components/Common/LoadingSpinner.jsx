import React from 'react'
import { Center, Flex, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'


export default function LoadingSpinner({showText = true,  text = null }) {
    return (
        <Center height='full' w='full'>
            <Flex alignItems='center' gap={2}>
                <Spinner size='lg' />
                {text == null && showText == true
                    ? <Text>loading...</Text>
                    : text && showText == true
                    && <Text>{text}</Text>
                }
            </Flex>
        </Center>
    )
}
