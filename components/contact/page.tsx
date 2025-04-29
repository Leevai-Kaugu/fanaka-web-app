"use client";
import Link from "next/link";



export default function Read_more(){
    return(
     <Link href="contact">
        <button className="relative py-3 bg-white text-fanakaPrimary border-2 border-transparent group overflow-hidden w-[fit-content] cursor-pointer">
        <span className="relative z-10">Contact us</span>
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-fanakaPrimary transition-all duration-500 group-hover:w-full"></span>
        </button>
  </Link>

    )
}