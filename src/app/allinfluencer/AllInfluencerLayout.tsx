// app/allinfluencer/AllInfluencerLayout.tsx
import React from 'react'
import HeaderTop from '@/components/HeaderTop'

const AllInfluencerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderTop />
      {children}
    </>
  )
}

export default AllInfluencerLayout