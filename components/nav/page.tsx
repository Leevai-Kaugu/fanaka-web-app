'use client';
import Login from '@/components/login/page';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from "react-icons/io";
import logo from '@/public/Fanaka logo final-01.svg'
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <nav className=" border-b border-background shadow-md px-4 py-5  flex justify-between items-center relative z-50">
      <div className="text-xl ml-10 font-bold">
        <Link href="/"><Image
                            src={logo} // public folder path
                            alt="Fanaka logo"
                            width={1100}
                            height={900}
                            className="col-start-1 row-start-1 w-[50px] hover:scale-[110%] transition-hover duration-300"
        /></Link>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 group"
      >
        <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-white my-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Desktop Menu */}
    <ul className='hidden md:flex w-[50%] text-background justify-around items-center text-[1.3vw]'>
        <div className='flex w-[60%] justify-between'>
            <li className=""><Link href="/" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Home</Link></li>
                        <li className=""><Link href="partners" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Partners</Link></li>
                        <li className=""><Link href="about" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>About</Link></li>
                        <li className=""><Link href="career" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Careers</Link></li>
                        <li className=""><Link href="contact" className='py-[100%] hover:text-fp transition-all duration-300 ease-in'>Contact Us</Link>
            </li>
        </div> 
        <Login/>          
    </ul>
                
      

      {/* Slide-in and Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg px-8 py-12 space-y-6 text-lg font-medium text-fp z-50"
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                <IoMdClose size={24} className='text-fp' />
              </button>
              <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
              <li><Link href="/partners" onClick={() => setIsOpen(false)}>Partners</Link></li>
              <li><Link href="/career" onClick={() => setIsOpen(false)}>Careers</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
