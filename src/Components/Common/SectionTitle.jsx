import { Box, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function SectionTitle({ title, subTitle = '', fontWeight=null, fontSize=null, spacing=null, fontFamily='' }) {
    return (
        <Box w={{ base: 'full', md: '80%', lg: '65%' }}>
            <Text fontFamily={!fontFamily ? `'Lobster', cursive` : fontFamily} as='h1' fontWeight={!fontWeight ? {base: 'normal', md: 'normal' }: fontWeight} letterSpacing='0px' lineHeight='38px' fontSize={!fontSize ?{base:'24px', md:'32px'}: fontSize}>{title}</Text>
            {subTitle && <>
                {/* <Spacer h={1} /> */}
                <Text fontFamily={`'Comfortaa', cursive;`} color='gray.600' lineHeight='20px'  fontSize='14px'>{subTitle}</Text>
            </>}
            
            <Spacer h={!spacing ? (subTitle ? 3 : 3) : spacing} />
            
        </Box>
    )
}
