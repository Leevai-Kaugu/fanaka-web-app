// 'use client'; // Do NOT use this at the top unless required

import Nav from '@/components/nav/page';
// import Scroll from '@/components/scroll/page'; // 👈 Temporarily disable
import Image from "next/image";
import background from "@/public/Nav bg-01.svg"; // ✅ static import — keep
import We_do from '@/components/our_values/page';
// import Our_team from '@/components/our_team/page'; // 👈 Temporarily disable

export default function Home() {
  return (
    // <Scroll> 👈 Temporarily disabled
      <div className='grid relative w-full h-full'>
        <Image
          src={background}
          alt="Hero image"
          width={1100}
          height={900}
          className="col-start-1 row-start-1 w-full object-cover"
        />
        <div className="flex flex-col col-start-1 row-start-1 z-1 w-full">
          <Nav />
          <div className='mt-10 flex justify-center items-center flex-col'>
            <h1 className='text-2xl text-white font-bold'>ABOUT US</h1>
            <p className='text-lg text-fp'>Vision Statement</p>
            <p className='text-white text-center w-3/4'>
              A Zambia where every enterprise, no matter how small, has the financial tools, knowledge, and network to thrive
            </p>
          </div>
          <We_do /> {/* ✅ still enabled */}
          {/* <Our_team /> 👈 temporarily disabled */}
        </div>
      </div>
    // </Scroll>
  );
}
