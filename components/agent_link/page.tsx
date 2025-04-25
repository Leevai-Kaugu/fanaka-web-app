'use client'
import bussinessLdy from '@/public/_DSC9785.gif';
import Image from 'next/image';
import React from 'react';

export default function AgentLink() {
    return (
        <div className='grid relative w-[100%] h-[40vh] overflow-hidden'>
                        <Image
                            src={bussinessLdy} // Home page background
                            alt="Hero image"
                            width={1100}
                            height={900}
                            className="col-start-1 row-start-1 w-[100%] translate-y-[-15%] filter blur-[2px] brightness-90 hover:brightness-70 transition-all duration-300 ease-in-out"
                        />
                        <button className='text-white text-[2vw] cursor-pointer col-start-1 row-start-1 z-1 absolute w-full h-full flex justify-center items-center hover:scale-105 hover:bg-fg/70 transition-all duration-500 ease-in-out'>
                            Become a Field Entrepreneur
                        </button>
                    </div>
    )
}