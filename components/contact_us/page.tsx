
"use client";

import { useState } from "react";

export default function Contact_us() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden my-[20px] py-[10px] px-[40px] bg-fanakaPrimary text-background cursor-pointer  hover:text-foreground transition"
      
    >
      <span
        className="absolute w-40 h-40 rounded-full bg-background opacity-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-800 group-hover:scale-150 z-0 ease-in"
        style={{
          left: coords.x,
          top: coords.y,
          transform: `translate(-50%, -50%) scale(${isHovered ? 4 : 0})`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <span className="relative z-10">CONTACT US</span>
    </button>
  );
}


