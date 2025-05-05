'use client';

import React, { JSX } from 'react';
import Nav from '@/components/nav/page';
import AgentLink from '@/components/agent_link/page';
import Socials from '@/components/socials/page';
import oops from '@/public/no idea-01.svg';
import background from '@/public/Nav bg-01.svg';
import Image from 'next/image';
import Scroll from '@/components/scroll/page';
import Fe_testimonials from '@/components/fe_testimonials/page';

export default function Career(): JSX.Element {
  return (
    <Scroll>
      <div className="relative grid w-full h-full">
        {/* Background Image */}
        <Image
          src={background}
          alt="Hero background"
          className="col-start-1 row-start-1 w-full h-auto object-cover min-h-[80vh]"
        />

        {/* Overlay Content */}
        <div className="flex flex-col w-full col-start-1 row-start-1 z-10">
          <Nav />

          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center mt-[5vh] md:mt-[20vh] text-center px-4">
            <h1 className="text-[7vw] md:text-[3vw] text-fp font-bold">CAREERS</h1>
            <p className="text-pg mt-2 md:w-[40%] w-full">
              Grow With Us ~ Discover opportunities to build something amazing, challenging, inspiring, and rewarding.
            </p>
          </div>

          {/* Why Work With Us Section */}
          <div className="flex flex-col items-center justify-center md:mt-[20vh] mt-[10vh] px-4 text-center">
            <h2 className="text-xl md:text-2xl text-fp md:mb-6 mb-3">Why work with us</h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-[5vw] justify-center w-full max-w-6xl">
              {[
                {
                  title: 'Make Real Impact',
                  description:
                    'At Fanaka, your work directly empowers small businesses to grow, create jobs, and strengthen communities.',
                },
                {
                  title: 'Join a Supportive Team',
                  description:
                    'Fanaka is built on collaboration, respect, and shared success — you’ll be part of a passionate team that believes in making finance accessible and fair.',
                },
                {
                  title: 'Grow With Purpose',
                  description:
                    'We’re committed to your professional development, offering mentorship, skills training, and opportunities to advance as you help entrepreneurs succeed.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-5 px-6 bg-flp text-white rounded-lg shadow w-full md:w-[30%]"
                >
                  <h3 className="text-fp font-bold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            {/* Oops Image */}
            <div className="mt-[5vh] w-full max-w-5xl flex items-center justify-center">
              <Image
                src={oops}
                alt="Oops illustration"
                className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* No Jobs Text */}
            <div className="mt-10 w-full max-w-xl text-fg">
              <p>
                Ooops! Currently there are no vacant opportunities available. Don’t worry, we keep updating our social media pages when vacancies are available. Check us out!
              </p>
            </div>

            {/* Socials */}
            <div className="md:mt-6 mt-[0px]">
              <Socials />
            </div>

            {/* Agent CTA */}
            <div className="mt-12">
              <AgentLink />
            </div>
            <div className='mt-30'>
              <Fe_testimonials />
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
}
