import { Box } from '@chakra-ui/react'
import React from 'react'

export default function FlowerBgSection({children}) {
    return (
        <Box
            bgImage='https://images.unsplash.com/photo-1468174578019-d2e029959f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize={`cover`}
            backgroundAttachment='fixed'
        >
          {children}
        </Box>
    )
}
