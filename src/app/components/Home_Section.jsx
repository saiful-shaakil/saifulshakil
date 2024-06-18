import React from "react";
import Image from "next/image";
import dp from "../../../public/dp.png";
import ParticlesComponent from "./Particle";
export const Home_Section = () => {
  return (
    <section
      className="flex justify-center items-center h-screen lg:snap_child"
      id="home"
    >
      <div className="flex justify-center items-center flex-col mt-16">
        {/* <Image src={dp} className="rounded-full w-[280px]" alt="dp"></Image> */}
        {/*  */}
        <div className="relative w-44 h-44 tsm:w-48 tsm:h-48 md:w-64 md:h-64">
          {/* First Background Layer */}
          <div className="absolute inset-0 bg-[#7fd1a3] transform rotate-6"></div>
          {/* Second Background Layer */}
          <div className="absolute inset-0 bg-[#d17fad] transform -rotate-6"></div>
          {/* Photo Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={dp}
              className="w-full h-full object-cover"
              alt="dp"
            ></Image>
          </div>
        </div>
        {/*  */}
        <h1 className="mt-5 md:mt-8 text-[30px] md:text-[60px] font-poppins font-semibold text-center">
          Saiful Islam Shakil
        </h1>
        <span className="font-poppins text-center md:hidden">
          Data Analyst <br /> Data Science Enthusiast
        </span>
        <span className="font-poppins text-center hidden md:block">
          Data Analyst | Data Science Enthusiast
        </span>
      </div>
      <ParticlesComponent id="particles" />
    </section>
  );
};
