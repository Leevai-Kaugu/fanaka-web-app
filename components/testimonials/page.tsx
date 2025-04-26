'use client'
import React from 'react';

export default function Testimonials() {
    return (
        <div className='flex w-[100%] h-full'>
            <div className='w-full flex items-center justify-center pt-[5vh] '>
                <div className='flex w-1/2 flex-col'>
                    <h1 className='md:text-[2vw] text-[7vw] text-center font-bold text-background md:text-white text-flp'>Testimonials</h1>
                    <p className='text-center text-background text-white'>"Working with Fanaka was seamless from start to finish. The flexible payback terms and supportive team allowed me
                    to focus on growing my business without added stress. 
                    I highly recommend their service to anyone looking for a reliable 
                    and fair partner."
                    <br />
                    Kelvin Tembo ~ Trader Jisop Market</p>
                </div>
            </div>
        </div>
    )
}