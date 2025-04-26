
'use client'
import React from 'react'
import Contact_us from "@/components/contact_us/page";

export default function Hero(){
    return(
        <div className='md:block flex flex-col items-center md:items-center mt-[10vh] md:mt-[0px] px-[10vw] md:px-[0px]'>
            <h1 className="text-[5vw] text-white font-bold leading-none" 
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.15)' }}>FANAKA</h1>
            <h2 className="text-white text-[2.8vw] leading-none"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.05)' }}>Growing with you</h2>
            <p className='text-white text-[1.5vw]'
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.05)' }}>Learn, Borrow, Insure.</p>
            <p className='text-white pt-[20px] md:w-[45%]'>Fanaka’s community-led financial innovation uplifts Zambia’s MSMEs especially women and youth owned ones. Advancing poverty eradication, economic equality, and sustainable growth. </p>
            <Contact_us/>
        </div>
    )
}