import React from 'react'

import Scroll from '@/components/scroll/page'
import Nav from '@/components/nav/page'
import Image from 'next/image'
import background from '@/public/Nav bg-01.svg'

export default function About(){
    return(
        <Scroll>
        
        <div className="relative grid w-full min-h-screen">
      {/* Background Image */}
      <Image
        src={background}
        alt="Hero image"
        className="object-cover col-start-1 row-start-1 z-0"
      />

      {/* Navigation */}
      <div className="flex justify-center w-full col-start-1 row-start-1 z-10">
        <Nav />
      </div>
                
            </div>
        </Scroll>
    )
}