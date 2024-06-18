import Image from "next/image";
import React from "react";
import mar_camp from "../../../../public/projects/marketin_campaign.jpg";
import Link from "next/link";

export const Projects = () => {
  return (
    <section
      className="m_sec md:l_sec md:bg-transparent lg:snap_child"
      id="about"
    >
      <div className="m_wid">
        <h1 className="m_title_h1 md:l_title_h1">Recent Projects</h1>{" "}
        <div className="flex flex-col gap-y-10 justify-center items-center lg:flex-row lg:gap-x-5 xl:justify-between">
          <Link
            href="/projects/analyzing-marketing-campaign-python-1"
            target="_blank"
          >
            <div className="text-center">
              <Image src={mar_camp} alt="" className="w-80" />
              <h3 className="mt-2 font-roboto text-[14px]">Tech: Python</h3>
              <h1 className="l_subtitle">Analyzing Marketing Campaign</h1>
            </div>
          </Link>
          {/* 2nd */}

          {/* 3rd */}
        </div>
      </div>{" "}
    </section>
  );
};
