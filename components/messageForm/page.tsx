'use client'
import React from 'react';
import { useState } from 'react';
import SuccessModal from '@/components/successModal/page';


export default function MessageForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();
            setShowModal(true);
            setForm({ name: '', email: '', phone: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again later.');
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit} >
                <p className='text-fp uppercase font-bold text-center md:text-start md:text-[2vw] text-[5vw]'>Get in Touch</p>
                <div className="flex flex-col gap-4 w-full h-full">
                    <label htmlFor="name" className='text-white'>Name</label>
                    <input type="text" id="name" name="name" required className="border-b-2 border-white focus:outline-none focus:border-fp px-2" onChange={e => setForm({ ...form, name: e.target.value })}/>

                    <label htmlFor="email" className='text-white'>Email</label>
                    <input type="email" id="email" name="email" required className="border-b-2 border-white px-2 focus:outline-none focus:border-fp" onChange={e => setForm({ ...form, email: e.target.value })}/>

                    <label htmlFor="number" className='text-white'>Phone number</label>
                    <input type="number" id="number" name="number" required className="border-b-2 border-white px-2 focus:outline-none focus:border-fp" onChange={e => setForm({ ...form, phone: e.target.value })}/>

                    <label htmlFor="message" className='text-white'>Message</label>
                    <textarea id="message" name="message" required className="border-b-2 border-white px-2 focus:outline-none focus:border-fp" onChange={e => setForm({ ...form, message: e.target.value })}></textarea>

                    <button type="submit" className="bg-fp text-white rounded-md p-2 hover:bg-white hover:text-fp cursor-pointer transition-all duration-300">Send Message</button>
                    <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
                </div>
            </form>
        </div>
    )
}