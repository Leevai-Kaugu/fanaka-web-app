'use client'
import React from 'react'
import Image from 'next/image'
import businessLdy from "@/public/portrait-person-owning-managing-their-own-business.jpg"
import problemo from "@/public/problemo-01.svg"
import Approach_summary from '../approach_toggle/page'

export default function Summary(){
    return(
        <div className='flex flex-col w-full items-center'>
          <div className="flex mt-[20vh] w-[100%] justify-around">
                <div className="w-[30%]">
                  <Image
                    src={problemo}// public folder path
                    alt="Fanaka client C.E.O Interacting with a client"
                    width={1100}
                    height={900}
                    className="col-start-1 row-start-1 w-full h-full object-cover"
                  ></Image>
                </div>
                <div className="w-[60%] text-foreground text-center">
                  <div className="w-fit text-center h-auto justify-around mb-[10vh]">
                  <h2 className='text-center font-bold text-[2.5vw] text-fanakaPrimary mb-[2vh]'>The Opportunity Statement</h2>
                  <p className='text-fg'>In Zambia, 27.3% of adults own MSMEs; 98.8% are micro-sized; 95.6% operate informally and face immense barriers such as limited access to financial services, high borrowing costs, and low financial literacy. Women, representing over 60% of MSME owners, face disproportionate challenges in accessing capital and formalizing businesses</p>
                  </div>
                  <p className='font-bold text-fp'>Key Challenges</p>
                  <ul className='text-fg'>
                    <li>Only 6.5% of MSMEs have bank accounts, of whom 7.3% applied for loans (2017–22).</li>
                    <li>69% rely on personal funds due to barriers like high-interest rates (35%–45 % interest rates with 25%+ penalties) and lack of collateral.</li>
                    <li>48% of MSME owners have only secondary education; low financial record‑keeping (28%)</li>
                    <li>46% adversely affected by recent economic shocks, including the COVID-19 pandemic.</li>
                  </ul>
                </div>
          </div>
          <div className="flex mt-[20vh] w-[100%] justify-around items-center">
            <Image
                src={businessLdy}// public folder path
                alt="Fanaka client C.E.O Interacting with a client"
                width={1100}
                height={900}
                className="col-start-1 row-start-1 w-[50%] h-[70%] object-cover"
            ></Image>
            <div className='w-[40%] '> 
              <div className='text-fp font-bold text-center'>
                <p className='text-[2vw]'>Our Approach</p>
                <p>Community Led Financial Inclusion</p>
              </div>
              <Approach_summary/>
            </div>
          </div>
        </div>
    )
}