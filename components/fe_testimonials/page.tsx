'use client';

import Image from 'next/image';


const testimonials = [
  {
    icon: '/WhatsApp Image 2025-05-04 at 21.24.49_4fdd8860.jpg',
    name: 'Miranda Simaliki',
    position: 'Senior Field Entrepreneur',
    location: 'Lusaka Zambia',
    text: `My experience at Fanaka has been very good. I have grown. I am now able to handle different people and understand customers better. This job has really trained me to be patient. As a senior Field Entrepreneur, it has also been easy for me to work with new FEs because I teach them through my experience.`,
  },
  {
    icon: '/WhatsApp Image 2025-05-04 at 21.25.37_9c1d0db6.jpg',
    name: 'Jane Mumba',
    position: 'Field Entrepreneur',
    location: 'Lusaka Zambia',
    text: `Fanaka has been good to me. Since I started working, the quality of my life has improved. When I face difficulties, the leadership supports me, and the team works with me — I never feel alone. The call center helps by reminding my customers. In April, I had 29 customers, and I look forward to meeting my May targets. I rate my experience 10/10.`,
  },
  {
    icon: '/WhatsApp Image 2025-05-04 at 21.25.03_de4f6f22.jpg',
    name: 'Tryness Munsanje',
    position: 'Field Entrepreneur',
    location: 'Lusaka Zambia',
    text: `My experience at Fanaka has been good so far. I started in January 2025. I had challenges in the beginning, particularly from allowing customers to refer others without first understanding their repayment behavior. This created a chain of poor-performing customers who influenced each other. Now, I only accept referrals from great customers. This community effect helps — good customers ensure their referrals perform well. My customers are now consistent with payments, and the call center no longer needs to remind them. I rank my experience at Fanaka 10/10.`,
  },
  {
    icon: '/WhatsApp Image 2025-05-04 at 21.24.34_8b60937e.jpg',
    name: 'Sylvia Mwale',
    position: 'Customer Success Team (Call Center)',
    location: 'Lusaka Zambia',
    text: `I started from scratch and didn’t know how to handle customers. Today, I’ve grown in confidence and skill. When we can’t reach a customer, the Field Entrepreneurs step in. Our success depends on teamwork and collaboration. I am now able to read customers and make informed decisions. Some customers are good — even if they skip a payment, they will call and explain, and you know they’ll succeed. I’ve also learned to spot dishonesty quickly. This job can't be done alone — collaboration between the call center and field team is key`,
  }
];

export default function Fe_testimonials() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl text-fp mb-12">
          What Our Field Entrepreneurs Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 mt-20 shadow-md hover:shadow-lg transition relative pt-14"
            > 
              <div className="w-35 h-35 mx-auto -mt-35 relative rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src={testimonial.icon}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="grayscale-100 transition-all duration-300 hover:scale-130"
                />
              </div>
              <h3 className="text-lg text-fp text-center mt-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-fg font-semibold text-center mb-4">
                {testimonial.position}
              </p>
              <p className="text-sm text-fg text-center mb-4">
                {testimonial.location}
              </p>
              <p className="text-fg text-center">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
