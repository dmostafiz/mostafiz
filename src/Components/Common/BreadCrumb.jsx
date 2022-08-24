import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react'
import NextLink from 'next/link';

export default function BreadCrumb({ maxW = 'full', links }) {
    return (
        <Box py={2} bg={'white'} fontWeight='semibold' shadow='sm'>
            <Container maxW={maxW}>

                <Breadcrumb spacing='8px' separator={'/'}>

                    {
                        links.map((link, index) => {
                            return <BreadcrumbItem key={index}>
                                <NextLink href={link.path}>
                                    <BreadcrumbLink href={link.path}>{link.name}</BreadcrumbLink>
                                </NextLink>
                            </BreadcrumbItem>

                        })
                    }

                </Breadcrumb>
            </Container >
        </Box>
    )
}
