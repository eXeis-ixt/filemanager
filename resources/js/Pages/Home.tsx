import { FeaturesSectionWithHoverEffects } from '@/Components/feature-section'
import { Hero } from '@/Components/ui/animated-hero'
import { Card, CardContent } from '@/Components/ui/card'
import { PricingSectionDemo } from '@/Components/ui/pricing'
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



        <Hero />


    <div className="min-h-screen w-full">
      <div className="">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>


<div>
    <PricingSectionDemo />
</div>

        </HomeLayout>


    </div>
  )
}

export default Home
