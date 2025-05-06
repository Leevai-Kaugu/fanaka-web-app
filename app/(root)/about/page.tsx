'use client';

import Nav from '@/components/nav/page';
import ImpactTable from '@/components/impact_table/page';
import OurTeam from '@/components/our_team/page';
import Image from 'next/image';
import Scroll from '@/components/scroll/page';

export default function AboutPage() {
  return (
    <Scroll>
      <div className="bg-white relative grid w-full min-h-screen">
        {/* Background Image */}
        <Image
          src='/Nav bg-01.svg' // Background image
          alt="Background Image"
          width={1100}
          height={900}
          className="object-cover col-start-1 row-start-1 w-full min-h-[80vh]"
        />

        {/* Main Content */}
        <div className="relative flex flex-col w-full col-start-1 row-start-1 z-10">
          <Nav />

          {/* About Section */}
          <section className="flex flex-col items-center justify-center text-center mt-24 md:mt-20 px-6 md:px-0">
            <h1 className="text-[7vw] md:text-[3vw] text-white font-bold md:leading-tight">ABOUT US</h1>
            <p className="text-fp text-[6vw] md:text-[2vw] md:mt-3">Vision Statement</p>
            <p className="text-fg lg:text-[1.2vw] md:text-[2.2vw] text-[4vw] w-full md:w-[40%] md:mt-6 mt-2">
              A Zambia where every enterprise, no matter how small, has the financial tools, knowledge, and network to thrive.
            </p>
          </section>

          {/* Our Values Section */}
          {/* <section className="px-6 md:px-16 md:mt-30 mt-5">
            <Values />
          </section> */}
        
            {/* Impact Section */}  
            <div className='w-full flex flex-col items-center mt-7 md:mt-20'>
              <h2 className="text-[6vw] md:text-[2rem] text-fp font-semibold text-center mt-24 md:mt-10 px-6 md:px-16">Our Impact</h2>
              <div className='w-full sm:w-[80%]'>
                <ImpactTable />
              </div>
            </div>
          {/* Our Team Section */}
          {/* <section className="flex flex-col items-center mt-24 md:mt-32 px-6 md:px-16">
            <h2 className="text-[6vw] md:text-[2rem] mb-10 text-fp font-semibold">Our Team</h2>
            <OurTeam />
          </section> */}
        </div>
      </div>
    </Scroll>
  );
}
