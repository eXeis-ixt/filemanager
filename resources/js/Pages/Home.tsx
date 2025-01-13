import { Hero } from '@/Components/ui/animated-hero'
import { Card, CardContent } from '@/Components/ui/card'
import HomeLayout from '@/Layouts/HomeLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Head>
            <title>
                Home
            </title>
        </Head>
        <HomeLayout>


    <div className=' relative'>
    <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
        <Hero />
    </div>



        </HomeLayout>


    </div>
  )
}

export default Home
