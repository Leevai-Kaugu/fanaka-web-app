'use client'
import React from 'react'
import Image from 'next/image'
import businessLdy from "@/public/portrait-person-owning-managing-their-own-business.jpg"
import Approach_summary from '../approach_toggle/page'
import Scroll from '../scroll/page'

export default function Summary(){
    return(
        <Scroll>
          <div className='flex flex-col w-full items-center'>
            <div className="flex flex-col md:flex-row md:mt-[30vh] mt-0 w-[100%] justify-around">
                <div className="w-full flex justify-center md:w-[30%]">
                  <Image
                    src='/problemo-01.svg'// public folder path
                    alt="Fanaka client C.E.O Interacting with a client"
                    width={1100}
                    height={900}
                    className="col-start-1 w-[80%] row-start-1 md:w-full h-full object-cover mb-20"
                  ></Image>
                </div>
                <div className="w-full md:w-[50%] px-6 md:px-0 text-fg text-center md:text-start">
                  <div className="w-fit h-auto justify-around mb-[10vh]">
                    <h2 className='font-bold text-[5vw] md:text-[2.5vw] text-fanakaPrimary mb-[2vh] md:mb-[0px] lg:text-start text-center'>The Opportunity Statement</h2>
                    <p className='text-fg'>In Zambia, 27.3% of adults own MSMEs; 98.8% are micro-sized; 95.6% operate informally and face immense barriers such as limited access to financial services, high borrowing costs, and low financial literacy. Women, representing over 60% of MSME owners, face disproportionate challenges in accessing capital and formalizing businesses</p>
                  </div>
                  <p className='font-bold text-fp text-[5vw] md:text-[2vw]'>Key Challenges</p>
                  <ul className='text-fg'>
                    <li>Only 6.5% of MSMEs have bank accounts, of whom 7.3% applied for loans (2017–22).</li>
                    <li>69% rely on personal funds due to barriers like high-interest rates (35%–45 % interest rates with 25%+ penalties) and lack of collateral.</li>
                    <li>48% of MSME owners have only secondary education; low financial record‑keeping (28%)</li>
                    <li>46% adversely affected by recent economic shocks, including the COVID-19 pandemic.</li>
                  </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-[20vh] w-[100%] justify-around items-center">
            <Image
                src={businessLdy}// public folder path
                alt="Fanaka client C.E.O Interacting with a client"
                width={1100}
                height={900}
                className="col-start-1 row-start-1 w-full md:w-[50%] h-[70%] object-cover"
            ></Image>
            <div className='w-full md:w-[40%]'> 
              <div className='text-fp font-bold text-center mt-[10vh] md:mt-[0vh]'>
                <p className='text-[5vw] md:text-[2.5vw]'>Our Approach</p>
                <p>Community Led Financial Inclusion</p>
              </div>
              <Approach_summary/>
            </div>
          </div>
        </div>
        </Scroll>
    )
}