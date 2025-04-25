'use client'
import React from 'react';
import Link from 'next/link';
import logo from '@/public/Fanaka logo final-01.svg'
import Image from 'next/image';
import Login from '@/components/login/page';



export default function Nav(){
    
    return(
        <div className='flex w-full border-b-1 border-background px-[5%] h-[15vh]'>
            <div className='flex justify-even items-center w-[100%] h-[100%] justify-between'>
                <div>
                    <Link href="/"><Image
                        src={logo} // public folder path
                        alt="Fanaka logo"
                        width={1100}
                        height={900}
                        className="col-start-1 row-start-1 w-[50px] hover:scale-[110%] transition-hover duration-300"
                    /></Link>
                </div>
                <ul className='flex w-[30%] justify-between text-background text-[1vw]'>
                    <li className=""><Link href="/" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Home</Link></li>
                    <li className=""><Link href="partners" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Partners</Link></li>
                    <li className=""><Link href="about" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>About</Link></li>
                    <li className=""><Link href="career" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Careers</Link></li>
                    <li className=""><Link href="contact" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Contact Us</Link></li>
                </ul>
                <Login/>
            </div>
        </div>
    )
};