"use client";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [open, setOpen] = useState(false);

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
    <nav
      className={`fixed w-full z-50 ${isScrolling && "bg-white"} ${
        open && "bg-white"
      }`}
    >
      <div className={`flex justify-between m_wid h-20 items-center`}>
        {/* Logo */}
        <div>
          <span className="text-[32px] md:text-[40px] font-poppins font-bold">
            S. Shakil
          </span>
        </div>
        {/* Menu Logo */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-black cursor-pointer lg:hidden"
        >
          {open ? <FaXmark /> : <RiMenu3Fill />}
        </div>
        {/*  */}
        {/* For LG */}
        <ul
          className={`flex flex-col lg:flex-row text-xl text-black py-5 lg:items-center gap-5 lg:gap-7 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:px-0 px-[7.5%] font-poppins ${
            open ? "top-16 bg-white text-black" : "top-[-490px]"
          }`}
        >
          <li>
            <a
              onClick={() => setOpen(false)}
              className="hover:text-gray-400 duration-500"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpen(false)}
              className="hover:text-gray-400 duration-500"
              href="#areas_of_interest"
            >
              Interests
            </a>
          </li>

          <li>
            <a
              onClick={() => setOpen(false)}
              className="hover:text-gray-400 duration-500"
              href="#certifications"
            >
              Certifications
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpen(false)}
              className="hover:text-gray-400 duration-500"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
