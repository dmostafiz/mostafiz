import { Box } from '@chakra-ui/react'
import React from 'react'
import MainNav from './partials/MainNav'

export default function PublicLayout({ children }) {
  return (
    <>
      <MainNav />
      <Box>{children}</Box>
    </>
  )
}
