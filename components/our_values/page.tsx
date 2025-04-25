'use client';

import {
  FaGraduationCap,
  FaShieldAlt,
} from 'react-icons/fa';
import { RiTeamFill } from "react-icons/ri";
import { JSX } from 'react/jsx-runtime';
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { GiFist } from "react-icons/gi";

export default function Our_values() {
  const content = {
    col1: [
      {
        title: 'Kindness',
        text: 'kindness builds trust, strengthens relationships, and inspires our people to do their best.',
        icon: <FaHandshakeSimple />,
      },
      {
        title: 'Respect',
        text: 'we recognize the inherent worth of every individual and treating others with dignity, fairness, and kindness. Which creates a culture where people feel heard, valued, and empowered to contribute fully.',
        icon: <FaGraduationCap />,
      },
    ],
    col2: [
      {
        title: 'Our Values',
        highlight: true, // <-- Will be treated differently
      },
      {
        title: 'Innovation',
        text: 'as a company we embrace creativity, curiosity, and forward thinking to solve problems and drive progress.',
        icon: <HiLightBulb />,
      },
      {
        title: 'Integrity',
        text: 'as a company we evalue doing the right thing — even when no one is watching. This helps build trust with employees, customers, and partners through consistent, ethical actions.',
        icon: <FaShieldAlt />,
      },
    ],
    col3: [
      {
        title: 'Empowerment',
        text: 'as a company we value iving people the confidence, tools, and autonomy to take initiative, make decisions, and grow.',
        icon: <GiFist />,
      },
      {
        title: 'Collaboration',
        text: 'working together with openness, trust, and shared purpose fosters a culture where diverse perspectives are valued, communication is clear, and teamwork leads to smarter solutions and stronger results.',
        icon: <RiTeamFill />,
      },
    ],
  };

  return (
    <div className="min-h-screen p-6 w-full">
      <div className='flex flex-col items-center'>
        <div className="grid w-[60%] grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-4">
            {content.col1.map((item, i) => (
              <Card key={`col1-${i}`} item={item} />
            ))}
          </div>

          {/* Center column, highlight comes first on mobile */}
          <div className="space-y-4 order-first md:order-none">
            {content.col2.map((item, i) => (
              <Card key={`col2-${i}`} item={item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            {content.col3.map((item, i) => (
              <Card key={`col3-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  item,
}: {
  item: { title: string; text?: string; icon?: JSX.Element; highlight?: boolean };
}) {
  if (item.highlight) {
    return (
      <div className="text-center px-6 py-8">
        <h3 className="text-[2vw] text-fp">{item.title}</h3>
      </div>
    );
  }

  return (
    <div className="p-6 rounded shadow text-white bg-fp cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
      <div className="text-2xl mb-2">{item.icon}</div>
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="text-sm mt-2">{item.text}</p>
    </div>
  );
}
