'use client'
import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
  } from 'react-icons/fa';

export default function Socials() {
    return (
        <div className='flex gap-10'>
            <div><FaLinkedin className='size-[2rem] text-fp cursor-pointer'/></div>
            <div><FaFacebook className='size-[2rem] text-fp cursor-pointer'/></div>
            <div><FaInstagram className='size-[2rem] text-fp cursor-pointer'/></div>                
        </div>
    )
}