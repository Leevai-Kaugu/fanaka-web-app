'use client'
import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
  } from 'react-icons/fa';

export default function Socials() {
    return (
        <div className='flex w-full justify-between my-[10vh] '>
            <div><FaLinkedin className='size-[2rem] text-fp cursor-pointer'/></div>
            <div><FaFacebook className='size-[2rem] text-fp cursor-pointer'/></div>
            <div><FaInstagram className='size-[2rem] text-fp cursor-pointer'/></div>                
        </div>
    )
}