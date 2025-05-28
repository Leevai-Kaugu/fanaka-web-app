'use client';
import { useState } from 'react';
import SuccessModal from '@/components/successModal/page';

export default function PartnerApplicationForm() {
  //Button logic
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    
  };
  //End of button logic

  const [form, setForm] = useState({
          name: '',
          email: '',
          phoneNumber: '',
          expectedReturn: '',
          loanAmount: ''
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
              setForm({ name: '', email: '', phoneNumber: '', expectedReturn: '', loanAmount: '' }); // Reset form
          } catch (error) {
              console.error('Error sending email:', error);
              alert('Failed to send message. Please try again later.');
          }
      };

  return (
    <form onSubmit={handleSubmit} className="max-w-md lg:mx-0 mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-fp mb-1">Become a partner</h2>
      <p className="text-sm text-fg mb-6">Want to become a debt partner. Fill the form below and we will get in touch!</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-fg mb-1">Your Name or Name of your Organisation*</label>
        <input
          name="name"
          type="text"
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium text-fg mb-1">Email*</label>
        <input
          name="email"
          type="email"
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-fg mb-1">Phone number*</label>
        <input
          name="phoneNumber"
          type="tel"
          onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-fg mb-1">Potential percent return per annum expectation*</label>
        <input
          name="expectedReturn"
          type="number"
          min="0"
          step="0.01"
          onChange={e => setForm({ ...form, expectedReturn: e.target.value })}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-fg mb-1">How much as debt would they lend*</label>
        <input
          name="loanAmount"
          type="number"
          min="0"
          step="100"
          onChange={e => setForm({ ...form, loanAmount: e.target.value })}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        type="submit"
        className="relative w-full bg-fp overflow-hidden border-0 px-[30px] py-[10px] text-background cursor-pointer hover:text-foreground hover:border-fp transition"
      >
      <span
        className="absolute w-70 h-40 rounded-full bg-white opacity-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-150 z-0 ease-in"
        style={{
          left: coords.x,
          top: coords.y,
          transform: `translate(-50%, -50%) scale(${isHovered ? 4 : 0})`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <span className="relative z-10">Send</span>
      </button>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </form>
  );
}
