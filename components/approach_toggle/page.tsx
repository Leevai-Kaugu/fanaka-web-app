'use client';

import { useState } from 'react';

export default function Approach_summary() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      answer: "Field Entrepreneur Model",
      breakdown: "● We train local agents embedded in communities to provide on‑the‑ground credit application, collections, and financial literacy sessions."
    },
    {
      answer: "Tailor-made Financial Products & Services",
      breakdown: "● Flexible Microloans that take into account the business cash flow",
      breakdown2: "● Microinsurance Linkage: Working with Bestlife Insurance, we connect the MSMEs to tailored micro insurance cover"
    },
    {
      answer: "Digital Inclusion",
      breakdown: "● Mobile Money - 34.5% adoption vs 1.9% national savings-accounts",
      breakdown2: "● USSD & App­-based Repayments for rural reach"
    },
    {
      answer: "Financial Literacy & Digital Skills",
      breakdown: "● Working with Learn.Ink to provide MSMEs with gamified microlearning  (SDG Target 4.6.1)",
      breakdown2: "● Local language content, offline‑enabled modules"
    }
  ];

  const toggle = (index: number | null) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-fit mx-auto p-6 my-[10%]">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border-b border-gray-200 p-4 m-[10px] rounded-lg transition-colors duration-300 cursor-pointer ${
            openIndex === index ? 'bg-flp' : 'bg-white'
          } `}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 cursor-pointer"
          >
            {faq.answer}
            <span className="text-fg ml-2">{openIndex === index ? '▲' : '▼'}</span>
          </button>

          {/* Breakdown */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-fg">{faq.breakdown}</p>
            {faq.breakdown2 && <p className="text-fg">{faq.breakdown2}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
