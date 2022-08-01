import React from 'react'
import MainNav from './partials/MainNav'

export default function PublicLayout({children}) {
  return (
    <>
    <MainNav />
    <div>{children}</div>
    </>
  )
}
