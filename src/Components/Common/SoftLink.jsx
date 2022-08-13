import Link from 'next/link'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function SoftLink({ children, to }) {
    return (
        <Link href={to}>
            <Box cursor={`pointer`}>{children}</Box>
        </Link>
    )
}
