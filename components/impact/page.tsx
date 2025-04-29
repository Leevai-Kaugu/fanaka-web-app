'use client';

import { useState } from 'react';
import { IoIosArrowDropdown,IoIosArrowDropup } from "react-icons/io";
import Impact_table from '../impact_table/page';

export default function Impact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full md:w-[70%] mx-auto p-4 border border-fp rounded-lg shadow-md bg-white">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold text-lg text-fp">Click here to {isOpen ? 'Close' : 'Open'} full impact evaluation and monitering metrics</span>
        {isOpen ? <IoIosArrowDropup size={24} className='text-fp' /> : <IoIosArrowDropdown size={24} className='text-fp' />}
      </button>

      {/* Animated Expandable Content */}
      {isOpen && (
        <div className="mt-4 text-gray-700 transition-all duration-300 ease-in-out w-full ">
          <Impact_table/>
        </div>
      )}
    </div>
  );
}
