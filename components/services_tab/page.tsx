'use client'
import React from 'react'
import Image from "next/image";
import Read_more from "@/components/read_more/page"
import insuranceImg from "@/public/Insurance-01.svg"
import smeLoanImg from "@/public/sme loans-01.svg"
import financialImg from "@/public/Financial literacy-01.svg"

export default function Services(){
    return(
        <div className="flex justify-around w-[100%] h-fit">
              <div className="w-fit bg-background text-center shadow-sm flex flex-col items-center">
                <Image
                  src={financialImg}
                  alt="Financial literacy illustration"
                  className="w-25 h-full object-fill"
                />
                <h2 className="text-[1.5rem]">Financial Literacy</h2>
                <p>Financial literacy training on personal <br/> finance, savings, loans, investment,<br/> and insurance for SMEs</p>
                <Read_more/>
              </div>
              <div className="w-fit bg-background p-[25px] text-center shadow-sm flex flex-col justify-around items-center">
              <Image
                  src={smeLoanImg}
                  alt="Financial literacy illustration"
                  className="w-25 h-full object-fill"
                />
                <h2 className="text-[1.5rem]">SME Loans</h2>
                <p>Digital financing is easy to access, and <br/> repayment terms are tailored to the <br /> MSME's needs.</p>
                <Read_more/>
              </div>
              <div className="w-fit bg-background p-[15px] text-center shadow-sm flex flex-col justify-around items-center">
              <Image
                  src={insuranceImg}
                  alt="Financial literacy illustration"
                  className="w-25 h-full object-fill"
                />
                <h2 className="text-[1.5rem]">Insurance</h2>
                <p>Insurance training and service <br /> provision - linking MSMEs to <br /> insurance products that matter to <br /> them building resiliance</p>
                <Read_more/>
              </div>
            </div>
    )
}