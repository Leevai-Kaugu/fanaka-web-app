'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Kaushal Kumar',
    location: 'New Delhi',
    avatar: '/WhatsApp Image 2025-05-04 at 11.44.58_c9684580.jpg',
    text: `The application is beautiful, marvelous and peace providing because it takes out the fear of losing our customer records out of our mind. Thank you, OkCredit team.`,
  },
  {
    name: 'Aditi Sharma',
    location: 'Mumbai',
    avatar: '/WhatsApp Image 2025-05-04 at 11.44.59_39e0a387.jpg',
    text: `Excellent UI and very intuitive. I recommend it to all small business owners.`,
  },
  {
    name: 'Rajeev Thakur',
    location: 'Bangalore',
    avatar: '/HILA.png',
    text: `Easy to use and very helpful for tracking daily transactions.`,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const testimonial = testimonials[current];

  return (
    <div className="md:w-full w-[80%] max-w-3xl mx-auto text-center py-12 relative">
      <h2 className="text-3xl font-bold mb-10">TESTIMONIALS</h2>

      <div className="relative bg-white shadow-lg rounded-lg p-10">
        <div className="w-24 h-24 mx-auto -mt-20 relative rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
        <p className="text-fg text-sm">{testimonial.location}</p>
        <p className="mt-6 text-fg">{testimonial.text}</p>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-500"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-500"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
