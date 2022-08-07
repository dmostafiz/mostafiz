import Link from 'next/link'
import React from 'react'
import NextLink from 'next/link'
import { Text } from '@chakra-ui/react'

export default function SoftLink({children, to}) {
    return (
        <NextLink href={to}>
            <Link href={to}>
                <Text as='span' cursor={`pointer`}>{children}</Text>
            </Link>
        </NextLink>
    )
}
