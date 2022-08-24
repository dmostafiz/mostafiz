import { Box, Divider, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function SectionTitle({ title, subTitle = '', fontWeight=null, fontSize=null, spacing=null, fontFamily='' }) {
    return (
        <Box w={{ base: 'full', md: '80%', lg: '60%' }}>

            <Text fontFamily={!fontFamily ? `'Lobster', cursive` : fontFamily} as='h1' fontWeight={!fontWeight ? {base: 'normal', md: 'normal' }: fontWeight} letterSpacing='0px' lineHeight='38px' fontSize={!fontSize ?{base:'24px', md:'32px'}: fontSize}>{title}</Text>
            {subTitle && <>
                <Spacer />
                <Text  color='gray.900' lineHeight='24px'  fontSize='17px'>{subTitle}</Text>
            </>}

            <Spacer h={1} />

        </Box>
    )
}
