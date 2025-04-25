"use client";
import Link from "next/link";

import { useState } from "react";


export default function Read_more(){
    return(
     <button className="relative py-3 bg-white text-black border-2 border-transparent group overflow-hidden w-[fit-content]">
        <span className="relative z-10">Read More</span>
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-fanakaPrimary transition-all duration-500 group-hover:w-full"></span>
     </button>

    )
}