'use client';
import { useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    expectedReturn: '',
    loanAmount: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission (e.g., POST to API)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md lg:mx-0 mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-fp mb-1">Become a partner</h2>
      <p className="text-sm text-gray-500 mb-6">Want to become a debt partner. Fill the form below and we will get in touch!</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name*</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Company name*</label>
        <input
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email*</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone number*</label>
        <input
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Potential percent return per annum expectation*</label>
        <input
          name="expectedReturn"
          type="number"
          min="0"
          step="0.01"
          value={formData.expectedReturn}
          onChange={handleChange}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">How much as debt would they lend*</label>
        <input
          name="loanAmount"
          type="number"
          min="0"
          step="100"
          value={formData.loanAmount}
          onChange={handleChange}
          required
          className="w-full border-b-1 border-fg outline-none focus:border-fp px-2 bg-white py-2 transition-all duration-300"
        />
      </div>

      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        type="submit"
        className="relative w-full bg-fp overflow-hidden border px-[30px] py-[10px] text-background cursor-pointer hover:text-foreground hover:border-fp transition"
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
    </form>
  );
}
