'use client'
import React from 'react';


export default function MessageForm() {
    return (
        <div>
            <form action="submit">
                <p className='text-fp uppercase font-bold text-center md:text-start md:text-[2vw] text-[5vw]'>Get in Touch</p>
                <div className="flex flex-col gap-4 w-full h-full">
                    <label htmlFor="name" className='text-white'>Name</label>
                    <input type="text" id="name" name="name" required className="border-b-2 border-white focus:outline-none focus:border-fp px-2" />

                    <label htmlFor="email" className='text-white'>Email</label>
                    <input type="email" id="email" name="email" required className="border-b-2 border-white px-2 focus:outline-none focus:border-fp" />

                    <label htmlFor="number" className='text-white'>Phone number</label>
                    <input type="number" id="number" name="number" required className="border-b-2 border-white px-2 focus:outline-none focus:border-fp" />

                    <label htmlFor="message" className='text-white'>Message</label>
                    <textarea id="message" name="message" required className="border-b-2 border-white px-2 focus:outline-none focus:border-fp"></textarea>

                    <button type="submit" className="bg-fp text-white rounded-md p-2 hover:bg-white hover:text-fp cursor-pointer transition-all duration-300">Send Message</button>
                </div>
            </form>
        </div>
    )
}