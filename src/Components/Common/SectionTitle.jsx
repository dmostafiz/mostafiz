import { Box, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function SectionTitle({ title, subTitle = '' }) {
    return (
        <Box w={{ base: 'full', md: '80%', lg: '65%' }}>
            <Text as='h1' fontWeight='bold' letterSpacing='0px' lineHeight='38px' fontSize='32px'>{title}</Text>
            {subTitle && <>
                <Spacer h={0} />
                <Text color='gray.600' lineHeight='28px' letterSpacing='1px' fontSize='14px'>{subTitle}</Text>
            </>}
            <Spacer h={subTitle ? 8 : 5} />
        </Box>
    )
}
