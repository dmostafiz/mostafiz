import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function BreadCrumb({ maxW = 'full', links }) {
    return (
        <Box py={1} bg={'#f5f5f5'} fontWeight='normal'>
            
            <Container maxW={maxW}>

                <Breadcrumb spacing='4px' separator={'/'}>

                    {
                        links.map((link, index) => {
                            return <BreadcrumbItem key={index}>
                                <NextLink href={link.path}>
                                    <BreadcrumbLink href={link.path} fontSize='10px'>{link.name}</BreadcrumbLink>
                                </NextLink>
                            </BreadcrumbItem>

                        })
                    }

                </Breadcrumb>
            </Container >
        </Box>
    )
}
