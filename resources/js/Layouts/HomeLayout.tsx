import { Navbar } from '@/Components/Navigation/Navbar'
import React, { PropsWithChildren } from 'react'

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>

    <Navbar />

    <div className='container mt-[120px]'>
     {children}
    </div>

    </div>
  )
}

export default HomeLayout
