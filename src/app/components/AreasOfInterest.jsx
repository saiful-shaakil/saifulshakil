import React from "react";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaChartArea, FaLaptopHouse } from "react-icons/fa";
export const AreasOfInterest = () => {
  return (
    <section
      className="m_sec md:l_sec lg:snap_child bg-white"
      id="areas_of_interest"
    >
      <div className="m_wid">
        <h1 className="m_title_h1 md:l_title_h1">Areas of Interest</h1>
        <div className="flex items-center justify-center flex-col gap-y-10 text-center lg:flex-row lg:h-[50vh]">
          <div className="p_div">
            <MdOutlineAnalytics className="text-[100px]" />
            <h2 className="l_subtitle">Data Analytics</h2>
            <p className="font-roboto w-[80%]">
              I love digging into data to uncover important insights for solving
              real-world business problems.
            </p>
          </div>
          <div className="p_div">
            <FaChartArea className="text-[100px]" />
            <h2 className="l_subtitle">Data Visualization</h2>
            <p className="font-roboto w-[80%]">
              I love telling stories using data and creating beautiful
              presentations.
            </p>
          </div>
          <div className="p_div">
            <FaLaptopHouse className="text-[100px]" />
            <h2 className="l_subtitle">Model Development</h2>
            <p className="font-roboto w-[80%]">
              I love developing and implementing machine learning models in
              real-world production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
