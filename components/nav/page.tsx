import React from 'react';
import Link from 'next/link';
import logo from '@/public/Fanaka logo final-01.svg'
import Image from 'next/image';
import Login from '@/components/login/page';



export default function Nav(){
    
    return(
        <div className='flex items-center w-[100%] justify-between border-b-1 border-background p-[10px]'>
            <div>
                <Link href="/"><Image
                    src={logo} // public folder path
                    alt="Fanaka logo"
                    width={500}
                    height={300}
                    className="col-start-1 row-start-1 w-[50px]"
                /></Link>
            </div>
            <ul className='flex w-[25%] justify-between text-background'>
              <li className=""><Link href="/">Home</Link></li>
              <li className=""><Link href="about">About</Link></li>
              <li className=""><Link href="contact">Contact</Link></li>
            </ul>
            <Login/>
            {/* <button className='border px-[30px] py-[10px]'>LOGIN</button> */}
        </div>
    )
};