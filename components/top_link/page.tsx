'use client'
import React from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation';

const PageName = () => {
  const pathname = usePathname();

  const pageMap: Record<string, string> = {
    '/': 'Home',
    '/about': 'About Us',
    '/contact': 'Contact',
    '/blog': 'Blog',
  };

  const pageName = pageMap[pathname] || 'Unknown Page';

  return(
    <div className="flex w-[100%] flex-col col-start-1 row-start-1 z-1 items-center justify-center">
            <p className='text-background text-[2em]'>{pageName}</p>
            <div className='flex items-center'>
                <Link href='/' className='text-white'>Home</Link>
                <div className='bg-fanakaPrimary w-[10px] h-[10px] rounded-full mx-[5px]'></div>
                <p className='text-white'>{pageName}</p>
            </div>
        </div>
)
};

export default PageName;






