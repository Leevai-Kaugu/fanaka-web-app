'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Susan Mwanza',
    location: 'Lusaka Province',
    business: 'Grocery & Vegetable Seller',
    avatar: '/WhatsApp Image 2025-05-04 at 21.27.49_3e64c7cc.jpg',
    text: `I started with just K1,000 from Fanaka in May 2024. Today, I’ve grown to K6,000. I’ve managed to pay school fees for my children and even purchased a plot of land. I love the flexibility — I can repay anytime, even at 22 hours!`,
  },
  {
    name: ' Lister Soko',
    location: 'Lusaka Province',
    business: 'Fruit & Vegetable Seller',
    avatar: '/WhatsApp Image 2025-05-04 at 21.25.56_fb5a98f8.jpg',
    text: `Before Fanaka, I used to borrow from another company — they were rude and didn’t understand my cashflow challenges. Fanaka is different. The team is respectful and willing to work with me. I started with K2,000 and now I’m at K6,000. I plan to take a higher loan during the rainy season when I can get fresh supplies from farmers`,
  },
  {
    name: ' Rachel Mwanza',
    location: 'Lusaka Province',
    business: 'Pumpkin Seller & Poultry Farmer',
    avatar: '/WhatsApp Image 2025-05-04 at 21.27.07_067d3bf3.jpg',
    text: `In my business, I order pumpkins and sell them — that’s been my main income. Since joining Fanaka, I’ve grown from a K500 loan to K4,500. The profits have helped me start a poultry farm where I plan to raise 500 broiler chickens. I’m able to double the funds I get in just 2–3 weeks. What I love most about Fanaka is the understanding — even during cashflow challenges, I’m able to catch up and continue growing.`,
  },
  {
    name: 'Maureen Tembo',
    location: 'Lusaka Province',
    business: 'Charcoal Seller',
    avatar: '/WhatsApp Image 2025-05-04 at 21.28.41_407361cd.jpg',
    text: `I’ve worked with Fanaka for 3 months. I started with a K1,000 loan, moved to K2,000, and today I’m clearing it to access K2,500. I use the funds to buy charcoal bags, which I repackage and sell. One bag costs K500 and gives me a K350 profit — I sell more than 4 daily. I used to borrow from another company, but they didn’t understand me. That’s why I now work only with Fanaka.`,
  },
  {
    name: 'Zwakina Mvula',
    location: 'Lusaka Province',
    business: 'Vegetable Vendor',
    avatar: '/WhatsApp Image 2025-05-04 at 21.26.31_0a521349.jpg',
    text: `The profits I get from Fanaka loans have really improved my life. I’ve been able to buy a bed and other household items. When business is good, I make up to K900 a day. I sell vegetables like cabbage—buying at K5 or K6 and selling at K10. I sell up to 15 a day, and I make daily orders. My last loan was K6,000, and I make between K3,000 to K4,000 in profits every two weeks.`,
  },
  {
    name: 'Elidah Mbewe',
    location: 'Lusaka Province',
    business: 'Charcoal & Clothing Business Owner',
    avatar: '/WhatsApp Image 2025-05-04 at 21.29.31_a1a19993.jpg',
    text: `I started with my charcoal business, but through Fanaka, I’ve now opened a clothing shop. I began with a K1,500 loan and now have access to K5,000. The Fanaka team is respectful and communicates well, which makes working with them easy. I also love that I can repay late, even at 21 or 22 hours, after I’ve closed my shop. I’m now aiming for a K10,000 loan to increase my stock.`,
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
    <div className="md:w-full w-[80%] max-w-4xl mx-auto text-center py-12 relative">
      <h2 className="text-3xl text-white font-semi mb-30">TESTIMONIALS</h2>

      <div className="relative bg-white shadow-lg rounded-lg p-10">
        <div className="w-35 h-35 mx-auto -mt-30 relative rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <h3 className="text-xl text-fp font-bold mt-4">{testimonial.name}</h3>
        <p className="text-fg text-sm font-semibold">{testimonial.business}</p>
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
