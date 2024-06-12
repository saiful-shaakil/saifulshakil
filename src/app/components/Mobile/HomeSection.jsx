import React from "react";
import cover_photo from "../../../../public/Cover.png";
import profile from "../../../../public/profile.png";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export const HomeSection = () => {
  return (
    <section className="border-b-2 pb-6 bg-white relative -z-10" id="home">
      {/* Image */}
      <div className="relative">
        <button className="absolute right-2 top-2 bg-white p-2 rounded-full">
          <RiMenu3Fill />
        </button>
        <Image className=" relative -z-10" src={cover_photo} alt="cover" />
      </div>

      <div className="m_wid">
        {" "}
        <Image
          src={profile}
          className="w-24 h-24 tsm:w-32 tsm:h-32 rounded-full -mt-[50px] tsm:-mt-16 border-[2px] border-white"
          alt=""
        />
        {/* Info */}
        <h1 className="text-[22px] font-[600] mt-3 font-poppins">
          Saiful Islam Shakil
        </h1>
        <h5 className="font-sourcesans">
          Data Analyst | Data Science Enthusiast
        </h5>
        <h5 className="flex items-center text-[13px] gap-x-2 mt-3 text-[#808080] font-sourcesans">
          <FaGraduationCap className="text-[18px]" /> Rajshahi University of
          Engineering & Technology
        </h5>
        <h5 className="flex items-center text-[13px] gap-x-2 mt-3 text-[#808080] font-sourcesans">
          <MdLocationPin className="text-[18px]" /> Rajshahi, Bangladesh
        </h5>
      </div>
    </section>
  );
};
