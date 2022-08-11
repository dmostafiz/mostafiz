import Link from 'next/link'
import React from 'react'
import NextLink from 'next/link'
import { Box, Text } from '@chakra-ui/react'

export default function SoftLink({children, to}) {
    return (
        <NextLink href={to}>
            <Link href={to}>
                <Box cursor={`pointer`}>{children}</Box>
            </Link>
        </NextLink>
    )
}
