import Image from "next/image";
import React from "react";
import ibm from "../../../../public/cert/ibm_da_certificate.jpg";
import sql from "../../../../public/cert/sql_intermediate certificate.png";
import webdev from "../../../../public/cert/certificate_of_complete_web_development_course.png";
import Link from "next/link";

export const Certifications = () => {
  return (
    <section
      className="m_sec md:l_sec md:bg-transparent lg:snap_child"
      id="about"
    >
      <div className="m_wid">
        <h1 className="m_title_h1 md:l_title_h1">Certifications</h1>{" "}
        <div className="flex flex-col gap-y-10 justify-center items-center lg:flex-row lg:gap-x-5 xl:justify-between">
          <Link
            href="https://coursera.org/verify/professional-cert/4K5HJ4L6SM7H"
            target="_blank"
          >
            <div className="text-center">
              <Image src={ibm} alt="" className="w-80" />
              <h3 className="mt-2 font-roboto text-[14px]">Provider: IBM</h3>
              <h1 className="l_subtitle">IBM Data Analyst</h1>
            </div>
          </Link>
          {/* 2nd */}
          <Link
            href="https://www.hackerrank.com/certificates/b8b187cef84e"
            target="_blanck"
          >
            <div className="text-center">
              <Image src={sql} alt="" className="w-80" />
              <h3 className="mt-2 font-roboto text-[14px]">
                Provider: HackerRank
              </h3>
              <h1 className="l_subtitle">SQL (Intermediate)</h1>
            </div>
          </Link>
          {/* 3rd */}
          <Link
            href="https://drive.google.com/file/d/11aqvdOn68Onssf3kqA5PXG6eVs-l0dGv/view?usp=sharing"
            target="_blanck"
          >
            <div className="text-center">
              <Image src={webdev} alt="" className="w-80" />
              <h3 className="mt-2 font-roboto text-[14px]">
                Provider: Programming Hero
              </h3>
              <h1 className="l_subtitle">Complete Web Development</h1>
            </div>
          </Link>
        </div>
      </div>{" "}
    </section>
  );
};
