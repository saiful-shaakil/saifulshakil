"use client";
import React, { useEffect, useState } from "react";

export const LgNavbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed w-full z-50 ${isScrolling && "bg-white"}`}>
      <div className="flex justify-between m_wid h-20 items-center">
        <div>
          <span className="text-[40px] font-poppins font-bold">S. Shakil</span>
        </div>
        <ul className="flex gap-x-10 text-[18px] font-poppins">
          <li className="cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
