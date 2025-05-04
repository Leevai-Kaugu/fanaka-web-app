'use client';
import { useState } from 'react';

export default function PartnerApplicationForm() {
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-indigo-800 mb-1">Become a partner</h2>
      <p className="text-sm text-gray-500 mb-6">Tell us more about your business</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name*</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          className="w-full border border-gray-300 rounded-md px-3 py-2"
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
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-fp hover:bg-white text-white hover:text-fp cursor-pointer hover:border font-semibold py-2 px-4 rounded-md transition"
      >
        Next step
      </button>
    </form>
  );
}
